import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IonicApp, Page, NavParams} from 'ionic-angular';
import * as attendeesService from '../services/AttendeesService';

@Component({
  templateUrl: 'build/pages/attendees-details/attendees-details.html',
})
export class AttendeesDetailsPage {

constructor(app:IonicApp, nav:NavController, navParams:NavParams) {
      this.nav = nav;
      // If we navigated to this page, we will have an item available as a nav param
      this.attendee = navParams.get('attendee');
  }

  viewManager(event, managerId) {

      attendeeService.findById(managerId).then(attendee =>
          this.nav.push(AttendeesDetailsPage, {
              attendee: attendee
          })
      );

  }

}
