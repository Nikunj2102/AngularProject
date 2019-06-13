import { Injectable } from '@angular/core';
import { student } from './student';
import { Observable , of, fromEventPattern} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';
import { tap , catchError , map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(private http: HttpClient , private messageService: MessageService) { }
  private url = '/api/STUDENT_DATA';
  
  private handleError<T>(operation = "operation" , result?:T)
  {
    return (error:any): Observable<T> => {
      console.error(error);
      this.logMessage(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private logMessage(message: string)
  {
    this.messageService.addMessage(message);
  }
  getStudents() : Observable<student[]>
  {
    this.messageService.addMessage("List Fetched...");
    return this.http.get<student[]>(this.url).pipe(
      catchError(this.handleError<student[]>('getStudents' , []))
    );  
  }

  addStudent(data: student):Observable<student>
  { 
       return this.http.post<student>( this.url , data , httpOptions )
       .pipe(
       tap((newdata) => {
         this.logMessage(`New student added : ${newdata.name}`)
       }),
       catchError(this.handleError<student>('AddStudent'))
    );
    
  }

}

