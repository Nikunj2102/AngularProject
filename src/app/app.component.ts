import { Component , OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { } from 'ag-grid-angular';
import { Dialog } from 'ag-grid-community';
import { FormComponent } from './form/form.component'
import { MatDialog , MatDialogConfig } from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "MyApp";

  //manage instance of AgGrid
  @ViewChild('agGrid', {read:false, static: false}) agGrid;

  //Define columns as an array

  columnDefs = [
    {headerName: "ID" , field:"id" , sortable: true , filter : true , checkboxSelection : true},
    {headerName: "Name" , field : "name" , sortable: true , filter : true},
    {headerName: "Address" , field: "address" , sortable: true , filter : true},
    {headerName: "Mobile No" , field : "mobileno" , sortable: true , filter : true}
  ];

  rowData : any;

  //declare a constructor and define a local instance
 constructor(private http: HttpClient , private dialog: MatDialog) { }

  ngOnInit() 
  {
    this.rowData = this.http.get('https://api.myjson.com/bins/wvepl');
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();


    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
}


  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.name + ' ' + node.mobileno).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
//   https://api.myjson.com/bins/wvepl <- link to JSON data
  