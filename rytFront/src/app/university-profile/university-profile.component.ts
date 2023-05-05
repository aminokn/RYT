import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University, universities } from '../university';

@Component({
  selector: 'app-university-profile',
  templateUrl: './university-profile.component.html',
  styleUrls: ['./university-profile.component.css']
})
export class UniversityProfileComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
  ) { }

  uni: University | undefined;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const uniIdFromRoute = Number(routeParams.get('id'));
  
    this.uni = universities.find(uni => uni.id === uniIdFromRoute);
  }
}
