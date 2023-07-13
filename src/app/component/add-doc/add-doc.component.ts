import { Component, Inject } from '@angular/core';
import { FormGroup,Validators,FormControl, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent {
  doctorform:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:DataserviceService) 
  {
    this.doctorform=new FormGroup({
      dname:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      dept:new FormControl('',Validators.required),
      experience:new FormControl('',Validators.required),
      education:new FormControl('',Validators.required),
      design:new FormControl('',Validators.required),
      duty:new FormControl('',Validators.required)
    
    })
   }


   addDoc(){
    this.http.postdoc(this.doctorform.value).subscribe(res =>{
      console.log(this.doctorform.value);
      
    })
   }
  
  

  }

