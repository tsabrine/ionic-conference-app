import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicApp, Page, NavParams} from 'ionic-angular';
import {AttendeesDetailsPage} from '../attendees-details/attendees-details';
import * as attendeesService from '../services/AttendeesService';

@Component({
  templateUrl: 'build/pages/attendees/attendees.html',
})
export class AttendeesPage {

constructor(app:IonicApp, nav:NavController, navParams:NavParams) {

      this.nav = nav;

      attendeesService.findAll().then(data => this.attendee = data);

  }

  search(event, key) {
      attendeesService.findByName(event.target.value).then(attendee => this.attendee = attendee);
  }

  itemTapped(event, attendee) {

      this.nav.push(AttendeesDetailsPage, {
          attendee: attendee
      });

  }
}
