import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { University, universities } from '../university';
import { UniversityService } from '../university.service';
@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit{
  universities: University[];
  constructor(private universityService: UniversityService) {
    this.universities = [];
  }


  ngOnInit(): void {
    this.universityService.getUniversities().subscribe(
      (universities) => {
        this.universities = universities;
        console.log(universities);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  moreInfo(url: string | undefined) {
    window.open(url)
  }

}
