import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable , of, fromEventPattern} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(private http: HttpClient , private messageService: MessageService) { }
  private url = '/api/STUDENT_DATA'
  getStudents() : Observable<student[]>
  {
    this.messageService.addMessage("List Fetched...");
    return this.http.get<student[]>(this.url); 
    
  }
}

