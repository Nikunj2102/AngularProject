import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { student } from '../student';
import { StudentService } from '../student.service';
import { InMemoryDataService } from '../in-memory-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  mobileno: number;
  address: string;
  name: string;
  id: number;


  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.id = data.id;
    this.name = data.name;
    this.mobileno = data.mobileno;
    this.address = data.address;
}

ngOnInit() {
  this.form = this.fb.group({
      id: [this.id],
      name: [this.name],
      address: [this.address],
      mobileno: [this.mobileno]
    
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
