import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University} from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-profile',
  templateUrl: './university-profile.component.html',
  styleUrls: ['./university-profile.component.css']
})
export class UniversityProfileComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private uniService: UniversityService
  ) { }

  uni: University | undefined;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const uniIdFromRoute = Number(routeParams.get('id'));

    this.uniService.getUniversity(uniIdFromRoute).subscribe(
      (uni) => {
        this.uni = uni;
        console.log(uni);
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
