import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';

@Component({
  selector: 'app-take-dt',
  templateUrl: './take-dt.component.html',
  styleUrls: ['./take-dt.component.css']
})
export class TakeDtComponent {
  filterForm: FormGroup;
  filterFields: any[];
  fields:any[];
  ans:any=[];
  constructor(private router: Router,private fb: FormBuilder) {}
  ngOnInit() {
    this.fields=[
      "firstname",
      "lastname",
      "phone",
      "citizenshipCountry"
    ];
    this.filterFields = [
      {
        key: "common",
        title: "main fields",
        group: [
          {
            key: "createdAt",
            title: "Create Date",
            type: "date"
          },
          {
            key: "individualPerson",
            title: "Physical Person",
            group: [
              {
                key: "firstname",
                title: "First Name",
                type: "text"
              },
              {
                key: "lastname",
                title: "Last Name",
                type: "text"
              },
              {
                key: "phone",
                title: "Phone Number",
                type: "text"
              },
              {
                key: "citizenshipCountry",
                title: "Country",
                type: "text"
              }
            ]
          },
          {
            key: "legalPerson",
            title: "Legal Person",
            group: [
              {
                key: "brandname",
                title: "Brand Name",
                type: "text"
              },
              {
                key: "fullname",
                title: "Full Name",
                type: "text"
              },
              {
                key: "phone",
                title: "Phone",
                type: "text"
              },
              {
                key: "registrationCountry",
                title: "Country",
                type: "text"
              }
            ]
          }
        ]
      }
    ];
    this.filterForm = this.generateFilterForm();
  }
  onSubmit(event: any,field=this.fields){
    // console.log(field.length);
    // this.filterForm.get('firstname')?.value
    // Making the result Json
    for(let i=0;i<field.length;i++){
      // console.log(field[i])
      // console.log(event.target[field[i]].value);
      this.ans.push({
        [field[i]] : event.target[field[i]].value})
    }
    // console.log(this.ans)
    this.router.navigateByUrl('/take-input', {
      state: this.filterForm.value // <-- set custom-defined state here
    });
  }
  generateFilterForm(): FormGroup {
    const baseForm = this.fb.group({});
    this.filterFields.forEach(field => {
      baseForm.addControl(field.key, this.generateFormGroup(baseForm, field));
    });
    console.log(baseForm);
    return baseForm;
  }

  generateFormGroup(_baseForm: FormGroup, field: { group: any[]; }): FormGroup|FormControl {
    if (field.group) {
      const formGroup = this.fb.group({});
      field.group.forEach(item => {
        formGroup.addControl(item.key, this.generateFormGroup(formGroup, item));
      });
      return formGroup;
    }

      return new FormControl("");
}
}

