import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { UniversityService } from '../university.service';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  teachers: Teacher[];
  hasUni: Boolean;
  uniNames: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private uniService: UniversityService
  ){
    this.teachers = []
    this.hasUni = true;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const uniId = routeParams.get('id');

    if (uniId === null) {
      this.teacherService.getTopTenTeachers().subscribe(
        (teachers) => {
          teachers.forEach(
            (teacher) => {
              this.uniService.getUnivesityNameById(Number(teacher.university)).subscribe(
                (nameOfUni) => {
                  teacher.university = nameOfUni.name;
                }
              )
            }
          )
          this.uniService.sleep(1000);
          this.teachers = teachers;
        },
        (error) => {
          console.error(error);
        }
      );
      return;
    }

    this.uniService.getUniversityTeachers(Number(uniId)).subscribe(
      (teachers) => {
        teachers.forEach(
          (teacher) => {
            this.uniService.getUnivesityNameById(Number(teacher.university)).subscribe(
              (nameOfUni) => {
                teacher.university = nameOfUni.name;
              }
            )
          }
        )
        this.uniService.sleep(1000);
        this.teachers = teachers;
        console.log(teachers)
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
