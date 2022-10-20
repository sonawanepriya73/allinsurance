import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgstaffComponent } from './pgstaff/pgstaff.component';
import { PgstudentComponent } from './pgstudent/pgstudent.component';
import { PgdepartmentComponent } from './pgdepartment/pgdepartment.component';
import { PghomeComponent } from './pghome/pghome.component';



@NgModule({
  declarations: [
    PgstaffComponent,
    PgstudentComponent,
    PgdepartmentComponent,
    PghomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PgModule { }
