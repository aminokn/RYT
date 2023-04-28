import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersProfileComponent } from './teachers-profile/teachers-profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityTeachersComponent } from './university-teachers/university-teachers.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TeacherComponent,
    TeachersProfileComponent,
    HomeComponent,
    UniversityListComponent,
    UniversityTeachersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
