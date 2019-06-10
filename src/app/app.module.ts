import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import AgGridModule
import { AgGridModule } from 'ag-grid-angular';
//import HttpClientModule to fetch data from a remote server
import { HttpClientModule } from '@angular/common/http';

import 'ag-grid-enterprise';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import angular material for dialogue forms
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }
