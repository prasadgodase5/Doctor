import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import{FormControl,FormGroup} from '@angular/forms'
import { DataserviceService } from 'src/app/service/dataservice.service';
import{DialogRef} from '@angular/cdk/dialog'


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:DataserviceService,private _dialogref:DialogRef) {}

  loginform = new FormGroup({
    Name: new FormControl(' '),
    Gender: new FormControl(' '),
    DOB: new FormControl(' '),
    BloodGroup: new FormControl(' '),
    Mobile: new FormControl(' '),
    Email: new FormControl(' '),
    Symptoms: new FormControl(' '),
  });

  postpatientdata() {
    if (this.loginform.valid) {
      this.http.addpatient(this.loginform.value).subscribe({
        next: (valu: any) => {
          alert('patient added succefully');
          // console.log(this.loginform.value);
          
          this._dialogref.close();
        },
        error(err: any) {
          console.error(err);
        },
      });
    }
    console.log(this.loginform.value);
  }

}
