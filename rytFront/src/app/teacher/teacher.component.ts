import { Component, OnInit } from '@angular/core';
import { teachers } from '../teacher';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  teachers = teachers;
  hasUni: Boolean;

  constructor(
    private route: ActivatedRoute
  ){
    this.hasUni = true;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const uniName = routeParams.get('name');
    if (uniName === null) {
      this.hasUni = false
    }
    if (!this.hasUni) {
      return;
    }
    this.teachers = teachers.filter(p => p.university === uniName)
  }

  LinkedIn(url: string | undefined) {
    window.open(url)
  }
}
