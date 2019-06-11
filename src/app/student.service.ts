import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable , of} from 'rxjs';
import { STUDENT_DATA } from './dummyData';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents() : Observable<student[]>
  {
    return of(STUDENT_DATA);
  }
  
  constructor() { }
}
