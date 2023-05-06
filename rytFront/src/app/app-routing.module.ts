import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { TeachersProfileComponent } from './teachers-profile/teachers-profile.component';
import { UniversityProfileComponent } from './university-profile/university-profile.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'teacher', component: TeacherComponent},
  { path: 'universities', component: UniversityListComponent},

  { path: 'rating', component: RatingComponent}

  { path: 'home', component: HomeComponent},
  { path: 'universities/:id/teacher', component: TeacherComponent},
  { path: 'universities/:id/teacher/:t_id', component: TeachersProfileComponent},
  { path: 'universities/:id', component: UniversityProfileComponent}, 
  { path: 'teacher/:t_id', component: TeachersProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
