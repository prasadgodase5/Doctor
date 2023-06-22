import { Component } from '@angular/core';
import { AddDocComponent } from '../add-doc/add-doc.component';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  disableSelect:any;

  constructor(public dialog: MatDialog,private http:DataserviceService) {}

  openDialog() {
    this.dialog.open(AddDocComponent, {
      data: {
        animal: 'panda',
      },
    });
  }


 getdata(){
  this.http.getD().subscribe(res =>{

  })
 }

//  postdata(){
//   this.http.postD().subscribe(res =>{

//   })
//  }

}
