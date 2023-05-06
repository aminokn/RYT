import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-teachers-profile',
  templateUrl: './teachers-profile.component.html',
  styleUrls: ['./teachers-profile.component.css']
})
export class TeachersProfileComponent implements OnInit{

  @ViewChild('firstStar') firstStar : any;
  @ViewChild('secondStar') secondStar : any;
  @ViewChild('thirdStar') thirdStar : any;
  @ViewChild('fourthStar') fourthStar : any;
  @ViewChild('fifthStar') fifthStar : any;
  @ViewChild('ratingText') ratingText : any;

  @ViewChild('commentArea') commentArea : any;

  comment:string


  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService
  ){
    this.comment = ""
  }
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

  ratingcount=0;
  totalrating=0

  Finalrating:any;

  // ratingcontrol=new FormControl(0);
  // GetRating(){
  //   this.ratingcount++;
  //   this.totalrating +=this.ratingcontrol?.value || 0;
  //   //console.log(this.ratingcontrol.value);
  //   this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  // }

  rate(rating:number){
    switch (rating){
      case 1:
        // ★
        this.totalrating = 1
        this.firstStar.nativeElement.innerText = "☆"
        this.secondStar.nativeElement.innerText = "☆"
        this.thirdStar.nativeElement.innerText = "☆"
        this.fourthStar.nativeElement.innerText = "☆"
        this.fifthStar.nativeElement.innerText = "☆"

        this.firstStar.nativeElement.innerText = "★"
        this.ratingText.nativeElement.innerText = "1"
        break
      case 2:
        this.totalrating = 2
        this.firstStar.nativeElement.innerText = "☆"
        this.secondStar.nativeElement.innerText = "☆"
        this.thirdStar.nativeElement.innerText = "☆"
        this.fourthStar.nativeElement.innerText = "☆"
        this.fifthStar.nativeElement.innerText = "☆"

        this.firstStar.nativeElement.innerText = "★"
        this.secondStar.nativeElement.innerText = "★"

        this.ratingText.nativeElement.innerText = "2"
        break
      case 3:
        this.totalrating = 3
        this.firstStar.nativeElement.innerText = "☆"
        this.secondStar.nativeElement.innerText = "☆"
        this.thirdStar.nativeElement.innerText = "☆"
        this.fourthStar.nativeElement.innerText = "☆"
        this.fifthStar.nativeElement.innerText = "☆"

        this.firstStar.nativeElement.innerText = "★"
        this.secondStar.nativeElement.innerText = "★"
        this.thirdStar.nativeElement.innerText = "★"
        this.ratingText.nativeElement.innerText = "3"

        break
      case 4:
        this.totalrating = 4
        this.firstStar.nativeElement.innerText = "☆"
        this.secondStar.nativeElement.innerText = "☆"
        this.thirdStar.nativeElement.innerText = "☆"
        this.fourthStar.nativeElement.innerText = "☆"
        this.fifthStar.nativeElement.innerText = "☆"

        this.firstStar.nativeElement.innerText = "★"
        this.secondStar.nativeElement.innerText = "★"
        this.thirdStar.nativeElement.innerText = "★"
        this.fourthStar.nativeElement.innerText = "★"
        this.ratingText.nativeElement.innerText = "4"

        break
      case 5:
        this.totalrating = 5
        this.firstStar.nativeElement.innerText = "☆"
        this.secondStar.nativeElement.innerText = "☆"
        this.thirdStar.nativeElement.innerText = "☆"
        this.fourthStar.nativeElement.innerText = "☆"
        this.fifthStar.nativeElement.innerText = "☆"

        this.firstStar.nativeElement.innerText = "★"
        this.secondStar.nativeElement.innerText = "★"
        this.thirdStar.nativeElement.innerText = "★"
        this.fourthStar.nativeElement.innerText = "★"
        this.fifthStar.nativeElement.innerText = "★"
        this.ratingText.nativeElement.innerText = "5"

        break

    }
  }
  sendcomment(){
    this.comment = this.commentArea.nativeElement.value
    alert(this.comment)
  }
}
