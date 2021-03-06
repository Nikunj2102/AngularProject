import { Component , OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormComponent } from './form/form.component'
import { MatDialog , MatDialogConfig } from '@angular/material';
import { student } from './student';
import { StudentService } from './student.service';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { EditNameComponent } from './edit-name/edit-name.component';
import { TransmitService } from './transmit.service';
import { CellRendererComponent } from './cell-renderer/cell-renderer.component';


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
  idToUpdate: number;

  //KEEP TRACK OF THE AG-GRID
  @ViewChild('agGrid', {read:false, static: false}) agGrid;

  
  //DEFINING THE STRUCTURE OF THE GRID
  columnDefs = [
    {headerName: "ID" , field:"id" , sortable: false , filter : true , checkboxSelection : true},
    {headerName: "Name" , field : "name" , sortable: false , filter : true , cellRendererFramework: CellRendererComponent}, 
    {headerName: "Address" , field: "address" , sortable: false , filter : true},
    {headerName: "Mobile No" , field : "mobileno" , sortable: false , filter : true}
  ];

  

  //DEFINING LOCAL INSTANCES
  constructor(private transmitService:TransmitService, private http: HttpClient , private dialog: MatDialog , private studentService: StudentService) { }


   //FUNCTIONS 
   assignValue()
    {
      this.studentService.getStudents().subscribe( (students) => {
        this.transmitService.students = students;
        this.rowData = this.transmitService.students;
        this.idTrack = students.length + 1;
      });
  }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    

    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
      id: this.idTrack
    }; 
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
     
      (data:student) => {
        this.newStudent = data;
        this.studentService.addStudent(this.newStudent).subscribe();
        this.studentService.getStudents().subscribe((students) => {
          this.transmitService.students = students;
          this.rowData = this.transmitService.students;
          this.idTrack = students.length + 1;
        });
      });    
  }

      
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data ); 
    selectedData.forEach ((data) => {
      this.url = `/api/STUDENT_DATA/${data.id}`;
      this.studentService.logMessage(`Student Deleted: ${data.name}`);
      this.studentService.removeStudent(this.url).subscribe();
    });
    this.studentService.getStudents().subscribe(students => {
      this.transmitService.students = students;
      this.rowData = this.transmitService.students;
    });
  }

  openConfirm()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      if(data == true)
      {
        this.getSelectedRows();
      }
      if(data == false)
      {
        this.studentService.getStudents().subscribe(students => {
          this.transmitService.students = students;
          this.rowData = this.transmitService.students;
        });
      }
    });  
  }

  getData()
  {
    const fetchedData = this.agGrid.api.getSelectedNodes()[0].data;
    this.idToUpdate = fetchedData.id
    return fetchedData; 
  }

  

  editStudentPopUp()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: this.getData().id,
      name: this.getData().name,
      address: this.getData().address,
      mobileno: this.getData().mobileno
    }
    const dialogRef = this.dialog.open(EditNameComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      this.studentService.updateStudent(this.idToUpdate , data).subscribe();
      this.studentService.getStudents().subscribe(students => {
        this.transmitService.students = students;
        this.rowData = this.transmitService.students;
      });
    });
  }


  ngOnInit() 
  {
    this.assignValue();
  }

}
    
    //   https://api.myjson.com/bins/wvepl <- link to JSON data
    /* 
      get value of students into service students
      inject service students as row data
      after put request get new list of students
      set new students to service students
      inject new service students into row data
    
    */