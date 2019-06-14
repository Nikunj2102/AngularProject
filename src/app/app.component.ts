import { Component , OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dialog } from 'ag-grid-community';
import { FormComponent } from './form/form.component'
import { MatDialog , MatDialogConfig } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { student } from './student';
import { StudentService } from './student.service';
import { not } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';


// url = '/api/STUDENT_DATA';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  
  //VARIABLES DECLARATION
  title = "MyApp";
  rowData : student[];
  private newStudent:student;
  private url;
  private urls : string[];
  private newstudents : student[];
  idTrack: number;

  //KEEP TRACK OF THE AG-GRID
  @ViewChild('agGrid', {read:false, static: false}) agGrid;

  
  //DEFINING THE STRUCTURE OF THE GRID
  columnDefs = [
    {headerName: "ID" , field:"id" , sortable: true , filter : true , checkboxSelection : true },
    {headerName: "Name" , field : "name" , sortable: true , filter : true},
    {headerName: "Address" , field: "address" , sortable: true , filter : true},
    {headerName: "Mobile No" , field : "mobileno" , sortable: true , filter : true}
  ];

  

  //DEFINING LOCAL INSTANCES
  constructor(private http: HttpClient , private dialog: MatDialog , private studentService: StudentService) { }


   //FUNCTIONS 
   assignValue()
    {
      this.studentService.getStudents().subscribe( (students) => {
        this.rowData = students;
        this.idTrack = students.length + 1;
      });
  }

  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    

    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
      id: this.idTrack ,
      title: 'Angular For Beginners'
    }; 
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
     
      (data:student) => {
        this.newStudent = data;
        this.studentService.addStudent(this.newStudent).subscribe();
        this.studentService.getStudents().subscribe((students) => {
          this.rowData = students;
          this.idTrack = students.length + 1;
        });
      });    
  }

      
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );     
    selectedData.forEach ((data) => {
      this.url = `/api/STUDENT_DATA/${data.id}`;
      this.studentService.removeStudent(this.url).subscribe();
    });
    this.studentService.getStudents().subscribe(students => this.rowData = students);
  }

  ngOnInit() 
  {
    this.assignValue();
  }

}
    
    //   https://api.myjson.com/bins/wvepl <- link to JSON data
    