import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UgdepartmentComponent } from './ugdepartment/ugdepartment.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UghomeComponent } from './ughome/ughome';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';





const route: Routes=[
  {path:'',component:UghomeComponent},
  {path:'ugstaff',component:UgstaffComponent},
  {path:'ugstudent',component:UgstudentComponent},
  {path:'ugdepartment',component:UgdepartmentComponent}
]



@NgModule({
  declarations: [
   UgstaffComponent,
    UgstudentComponent,
    UgdepartmentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  [RouterModule.forChild(route)],
  ConfirmDialogModule,
 


  ],
  providers:[  ConfirmationService]
})
export class UgModule { }
