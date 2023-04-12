import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  title = 'rytFront';

  constructor(private _location: Location) {
  }
  
  backClicked() {
    this._location.back();
  }
}
