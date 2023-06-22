import { Component, Inject } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent {
loginform:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}





}
