import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { StaffdeatailsComponent } from './staffdeatails/staffdeatails.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './data communication/parent/parent.component';
import { ChildComponent } from './data communication/parent/child/child.component';
import { FirstComponent } from './data communication/first/first.component';
import { SecondComponent } from './data communication/second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Sample11Component } from './sample11/sample11.component';
import { Project1Component } from './project1/project1.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    StudentComponent,
    ContactusComponent,
    ErrorComponent,
    StaffdeatailsComponent,
    ContactComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    Sample11Component,
    Project1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
