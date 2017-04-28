import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';

@Component({selector: 'page-about', templateUrl: 'about.html'})

export class AboutPage {

  constructor(public navCtrl : NavController, public calendar : Calendar) {
    this
      .calendar
      .createCalendar('MyCalendar')
      .then((msg) => {
        console.log(msg);
      }, (err) => {
        console.log(err);
      });
  }
}
