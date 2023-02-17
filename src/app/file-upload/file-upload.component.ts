import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import {saveAs} from 'file-saver'
import { Router} from '@angular/router';
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
    // Inject service 
    constructor(private router: Router,private fileUploadService: FileUploadService) { }
  
    ngOnInit(): void {
    }
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
    }
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        saveAs(new File([this.file], this.file.name, {type: 'docx'}));
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    // Short link via api response
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );
        this.router.navigateByUrl('/take-datatype');
    }
}