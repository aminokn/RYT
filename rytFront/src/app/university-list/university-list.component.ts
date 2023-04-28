import { Component, importProvidersFrom } from '@angular/core';
import { universities } from '../university';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent {
  universities = universities;

  moreInfo(url: string | undefined) {
    window.open(url)
  }

}
