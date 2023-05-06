import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.css']
})
export class TeachersProfileComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ){}
  teacher: Teacher | undefined;

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const teacherIdFromRoute = Number(routeParams.get('t_id'));

    this.teacherService.getTeacher(teacherIdFromRoute).subscribe(
      (teacher) => {
        this.teacher = teacher;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  LinkedIn(url: string | undefined) {
    window.open(url)
  }
}
