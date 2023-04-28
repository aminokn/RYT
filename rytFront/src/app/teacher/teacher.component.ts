import { Component } from '@angular/core';
import { teachers } from '../teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  teachers = teachers;

  LinkedIn(url: string | undefined) {
    window.open(url)
  }
}
