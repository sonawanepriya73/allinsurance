import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FirstComponent } from './data communication/first/first.component';
import { ParentComponent } from './data communication/parent/parent.component';
import { SecondComponent } from './data communication/second/second.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { Sample11Component } from './sample11/sample11.component';

import { StaffComponent } from './staff/staff.component';
import { StaffdeatailsComponent } from './staffdeatails/staffdeatails.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'staff/:id/:name', component: StaffComponent},
  {path:'staffdeatails/:id/:name/:email',component:StaffdeatailsComponent},
  {path:'stud', component: StudentComponent},
  {path:'contact', component: ContactusComponent},
  {path:'contacts',component:ContactComponent},
  {path:'parent',component:ParentComponent},
  {path:'first' ,component:FirstComponent},
  {path:'second' ,component:SecondComponent},
  // {path:'**', component: ErrorComponent},
  // {path:'**', redirectTo:''},
  {
    path:'ug', loadChildren:()=>import('./ug/ug.module').then(mode=>mode.UgModule)
  },
  {
    path:'pg', loadChildren:()=>import('./pg/pg.module').then(mode=>mode.PgModule)
  },
  

  {path:'sample11' ,component:Sample11Component},
  {path:'project1',component:Project1Component},
   {path:'**', component: ErrorComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
