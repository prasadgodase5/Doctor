import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { th } from 'date-fns/locale';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

getpatient(){
  return this.http.get("http://localhost:3000/patient");
}

addpatient(data:any){
  return this.http.post("http://localhost:3000/patient",data);
}

getdoc(){
  return this.http.get("http://localhost:3000/doctordetails");
}

postdoc(data:any){
  return this.http.post("http://localhost:3000/doctordetails",data);
}

public search=new Subject<any>();

getsearchtext(data:any){
  return this.search.next(data);
}

public search1=new Subject<any>();

getsearchtext1(data:any){
  return this.search1.next(data);
}

}
