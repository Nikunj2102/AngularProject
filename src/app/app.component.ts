import { Component , OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { Dialog } from 'ag-grid-community';
import { FormComponent } from './form/form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "MyApp";

  //manage instance of AgGrid
  @ViewChild('agGrid') agGrid : AgGridNg2;

  //Define columns as an array

  columnDefs = [
    {headerName: "ID" , field:"id" , sortable: true , filter : true , checkboxSelection : true},
    {headerName: "Name" , field : "name" , sortable: true , filter : true},
    {headerName: "Address" , field: "address" , sortable: true , filter : true},
    {headerName: "Mobile No" , field : "mobileno" , sortable: true , filter : true}
  ];

  rowData : any;

  //make a constructor and declare a local instance
 constructor(private http: HttpClient) { }

  ngOnInit() 
  {
    this.rowData = this.http.get('https://api.myjson.com/bins/wvepl');
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.mobileno).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  // fillForm(e)
  // {
  //   let dialogRef = dialog.open(FormComponent , 
  //     {
  //       height : '400px',
  //       width: '400px'
  //     })
  // }

}

  //This is initial hardCoded data
  //  rowData = [
  //   {"id":1,"name":"Nikunj","address":"Sainik Vihar","mobileno":989898},
  //   {"id":2,"name":"Name2","address":"Address2","mobileno":979898},
  //   {"id":3,"name":"Name3","address":"Address3","mobileno":969898},
  //   {"id":4,"name":"Name4","address":"Address4","mobileno":949898},
  //   {"id":5,"name":"Name5","address":"Address5","mobileno":919898},
  //   {"id":6,"name":"Name6","address":"Address6","mobileno":869898},
  //   {"id":7,"name":"Name7","address":"Address7","mobileno":769898},
  //   {"id":8,"name":"Name8","address":"Address8","mobileno":469898},
  //   {"id":9,"name":"Name9","address":"Address9","mobileno":269898},
  //   {"id":10,"name":"Name10","address":"Address10","mobileno":559898},
  //   {"id":11,"name":"Name11","address":"Address11","mobileno":329898},
  //   {"id":12,"name":"Name12","address":"Address12","mobileno":679898}
  //  ]; //   https://api.myjson.com/bins/wvepl <- link to JSON data
  