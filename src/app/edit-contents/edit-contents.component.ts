import { Component, OnInit } from '@angular/core';
import { TransmitService } from '../transmit.service';
import { Location } from '@angular/common'; 
import { FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-contents',
  templateUrl: './edit-contents.component.html',
  styleUrls: ['./edit-contents.component.scss']
})
export class EditContentsComponent implements OnInit {

  //declaring variables
  id:number;
  name:string;
  address:string;
  mobileno: number;
  form: FormGroup;

  constructor(private fb:FormBuilder , private location: Location , private transmitService: TransmitService) { }

  assignValues()
  { 
    this.id = this.transmitService.data[0].id;
    this.name = this.transmitService.data[0].name;
    this.address = this.transmitService.data[0].address;
    this.mobileno = this.transmitService.data[0].mobileno;

    //generalise this for multiple requests
  }

  goBack()
  {
    this.location.back();
  }

  extractData()
  {
    console.log(this.form.value);
  }

  ngOnInit() {
    this.assignValues();
    this.form = this.fb.group({
      id: [this.id],
      name: [this.name],
      address: [this.address],
      mobileno: [this.mobileno]
    });
  }

}
