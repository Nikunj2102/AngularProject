import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class TransmitService {
  data = [];
  students = [];

  confirm()
  {
    console.log(this.data);
  }

  constructor() { }
}
