import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';
import { TakeDtComponent } from '../take-dt/take-dt.component';
@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html',
  styleUrls: [ './take-input.component.css' ]
})
export class TakeInputComponent  {
  title: 'this';
  filterForm: FormGroup;
  filterFields: any[];
  fields:any[];

  //Reading the inputs and generating the json format
  onSubmit(event: any,field=this.fields){
    console.log(field.length);
    for(let i=0;i<field.length;i++){
      console.log(event.target[field[i]].value);
    }
    this.router.navigateByUrl('/file-upload');
  }
  constructor(private takeDt: TakeDtComponent,private router: Router,private fb: FormBuilder) {}

//Initializing data
  ngOnInit() {
     this.filterForm=[history.state][0].common;
     this.fields=Object.keys(this.filterForm);
  }
  }

