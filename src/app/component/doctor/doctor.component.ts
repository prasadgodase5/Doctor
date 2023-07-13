import { Component ,OnInit} from '@angular/core';
import { AddDocComponent } from '../add-doc/add-doc.component';
import { MatDialog } from '@angular/material/dialog';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  disableSelect:any;

  constructor(public dialog: MatDialog,private http:DataserviceService) {}

  openDialog() {
    this.dialog.open(AddDocComponent, {
      data: {
        animal: 'panda',
      },
    });
  }


tx1:any;

ngOnInit(): void {
  this.getDoc();

  this.http.search1.subscribe((res:any) =>{
  this.tx1=res; 
  })
}

searched1(event:any){
this.http.getsearchtext1(event);
}






doctorsdata:any=[];

getDoc(){
  this.http.getdoc().subscribe(res =>{
    this.doctorsdata=res;
  })
}

}
