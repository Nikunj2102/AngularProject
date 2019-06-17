import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.scss']
})
export class EditNameComponent implements OnInit {

  form: FormGroup;
  id: number;
  name: string;
  mobileno: number;
  address: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditNameComponent>,
              @Inject(MAT_DIALOG_DATA) data) { 

                this.id = data.id;
                this.name = data.name;
                this.mobileno = data.mobileno;
                this.address = data.address;

              }
  
  close()
  {
    this.dialogRef.close(this.form.value);
  } 
  
  save()
  {
    this.dialogRef.close(this.form.value);
  }


  ngOnInit() {

    this.form = this.fb.group({
      id: [this.id],
      name: [this.name],
      address: [this.address],
      mobileno: [this.mobileno]
    
  });

  }

}
