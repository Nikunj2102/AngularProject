import { Injectable } from '@angular/core';
import { student } from './student';
import { STUDENT_DATA } from './dummyData';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents() : student[]
  {
    return STUDENT_DATA;
  }
  
  constructor() { }
}
