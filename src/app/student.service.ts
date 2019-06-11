import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable , of} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { STUDENT_DATA } from './dummyData';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private url = '/api/STUDENT_DATA'
  getStudents() : Observable<student[]>
  {
    return this.http.get<student[]>(this.url); 
    //of(STUDENT_DATA);
  }
  
  constructor(private http: HttpClient) { }
}
