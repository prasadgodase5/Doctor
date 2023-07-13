import { Component, OnInit } from '@angular/core';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(public dialog: MatDialog,private http:DataserviceService) {}
  

  openDialog() {
    this.dialog.open(AddpatientComponent, {
      data: {
        animal: 'panda',
      },
    });

  }
  data:any=[];
  tx:any;
    ngOnInit(): void{
      this.http.getpatient().subscribe(res =>{
        this.data=res;
    
      });

      this.http.search.subscribe((res:any) =>{
        this.tx=res;
      });

    }
 
   searched(event:any){
    this.http.getsearchtext(event.target.value);
   }

}
