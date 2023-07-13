import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css']
})
export class DocDetailsComponent {

  constructor(private http:DataserviceService){

  }


  

}
