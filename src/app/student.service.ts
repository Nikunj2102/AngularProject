import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable , of, fromEventPattern} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url = '/api/STUDENT_DATA'
  getStudents() : Observable<student[]>
  {
    return this.http.get<student[]>(this.url); 

  }

  addStudent(newStudent: student)
  {
    this.http.post<student>(this.url , newStudent , httpOptions);

    debugger;
  }
  
  constructor(private http: HttpClient) { }
}
