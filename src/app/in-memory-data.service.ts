import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { student } from './student';
import { STUDENT_DATA } from './dummyData';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb()
  {
    const STUDENT_DATA = [
      {"id":1,"name":"Nikunj","address":"Sainik Vihar","mobileno":989898},
      {"id":2,"name":"Name2","address":"Address2","mobileno":979898},
      {"id":3,"name":"Name3","address":"Address3","mobileno":969898},
      {"id":4,"name":"Name4","address":"Address4","mobileno":949898},
      {"id":5,"name":"Name5","address":"Address5","mobileno":919898},
      {"id":6,"name":"Name6","address":"Address6","mobileno":869898},
      {"id":7,"name":"Name7","address":"Address7","mobileno":769898},
      {"id":8,"name":"Name8","address":"Address8","mobileno":469898},
      {"id":9,"name":"Name9","address":"Address9","mobileno":269898},
      {"id":10,"name":"Name10","address":"Address10","mobileno":559898},
      {"id":11,"name":"Name11","address":"Address11","mobileno":329898},
      {"id":12,"name":"Name12","address":"Address12","mobileno":679898}
    ];
    return {STUDENT_DATA};
  }

  genId(STUDENT_DATA: student[]): number
  {
    return STUDENT_DATA.length > 0 ? Math.max(...STUDENT_DATA.map(student => student.id)) + 1 : 13;
  }

  constructor() { }
}
