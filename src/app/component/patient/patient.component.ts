import { Component } from '@angular/core';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddpatientComponent, {
      data: {
        animal: 'panda',
      },
    });

  }
}
