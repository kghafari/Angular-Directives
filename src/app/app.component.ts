import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clicks = [];
  clickCounter = 0;
  whatDisplayed = false;

  public onButtonClick() {
    //this.clicks.push(this.clickCounter);
    this.clicks.push(new Date());
    this.clickCounter++;
    this.whatDisplayed = !this.whatDisplayed;
  }

  public getColor()
  {
    return this.clickCounter >= 5 ? 'blue' : 'transparent';
  }
}

