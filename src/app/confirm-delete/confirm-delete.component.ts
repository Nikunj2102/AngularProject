import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {

  form : FormGroup;
  confirmValue : boolean;
  
  constructor(private fb: FormBuilder , private dialogRef: MatDialogRef<ConfirmDeleteComponent>) { }

  closeConfirm()
  {
    this.confirmValue = false;
    this.dialogRef.close(this.confirmValue);
    //debugger;
  }

  saveData()
  {
    this.confirmValue = true;
    this.dialogRef.close(this.confirmValue);
    //debugger;
  }

  ngOnInit() {
  }

}
