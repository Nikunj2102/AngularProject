import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//import AgGridModule
import { AgGridModule } from 'ag-grid-angular';

//import HttpClientModule to fetch data from a remote server
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import angular material for dialogue forms
import { MatDialogModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageComponent } from './message/message.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { EditNameComponent } from './edit-name/edit-name.component';
import { EditContentsComponent } from './edit-contents/edit-contents.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CellRendererComponent } from './cell-renderer/cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MessageComponent,
    ConfirmDeleteComponent,
    EditNameComponent,
    EditContentsComponent,
    MainComponentComponent,
    CellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AppRoutingModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [MainComponentComponent],
  entryComponents: [FormComponent , ConfirmDeleteComponent , EditNameComponent , CellRendererComponent]
})
export class AppModule { }
