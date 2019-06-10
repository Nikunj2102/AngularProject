import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  descripton: string;

  constructor(private fb: FormBuilder , private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.descripton = data.descripton;
     }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.descripton, []]
    });
  }
  
  save()
  {
    this.dialogRef.close(this.form.value);
  }

  close()
  {
    this.dialogRef.close();
  }
}
