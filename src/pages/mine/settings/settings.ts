import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {trigger, state, style, animate, transition} from '@angular/animations';

/**
 * Generated class for the Query page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  animations: [
    trigger('scaleState', [
      state('*', style({})),
      state('void',style({backgroundColor:'#fff',color:'#fff'})),
      transition('void => *', animate('1000ms ease-in', style({}))),
    ]),
    trigger('flashAnimate', [
      state('*', style({})),
      state('void',style({})),
      transition('void => *', animate('1000ms ease-in', style({transform: 'scaleY(2)',backgroundColor: '#0f0'}))),
      transition('* => void', animate('1000ms ease-out', style({backgroundColor: '#00f'})))
    ])]
})
export class Settings {

  constructor(public navCtrl : NavController, public navParams : NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
