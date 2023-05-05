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
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from "./AuthInterceptor";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TeacherComponent,
    TeachersProfileComponent,
    HomeComponent,
    UniversityListComponent,
    UniversityProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
