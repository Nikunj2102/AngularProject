import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContentsComponent } from './edit-contents/edit-contents.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:":name" , component: EditContentsComponent},
  {path:"", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
