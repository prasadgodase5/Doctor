import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Consulation'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [10,15,13,5]
      } ,
      {
        name: 'Line 2',
        data: [6,4,9,2]
      }as any,
      {
        name: 'Line 3',
        data: [3,5,15,3]
      }as any
    ]
  });


  
}
