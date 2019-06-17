import { Component, OnInit } from '@angular/core';
import { TransmitService } from '../transmit.service';

@Component({
  selector: 'app-cell-renderer',
  templateUrl: './cell-renderer.component.html',
  styleUrls: ['./cell-renderer.component.scss']
})
export class CellRendererComponent implements OnInit {

  name: any;
  url : any;
  params : any;
  completeObj: any;

  constructor(private transmitService: TransmitService) { }

  //similar to onInit
  agInit(params)
  { 
    this.name = params.value;
    this.url = `/${params.value}`;
    this.params = params;
  }

  getCompleteObj()
  {
    this.completeObj = this.params.data;
    console.log(this.completeObj);
    this.transmitService.data.push(this.completeObj);
    //this.transmitService.confirm();
  }

  ngOnInit() {
  }

}
