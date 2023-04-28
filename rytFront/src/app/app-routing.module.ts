import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UniversityTeachersComponent } from './university-teachers/university-teachers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent},
  { path: 'universities', component: UniversityListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'universities/:id/teacher', component: UniversityTeachersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
