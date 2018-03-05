// src/app/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    //if ( this.auth.isAuthenticated() ) console.log('login successfully.');
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      //this.getProfile();
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
  getProfile(): void {
    // this.problems = this.dataService.getProblems();
    this.auth.getProfiles()
      .subscribe(profile => this.profile = profile);
  }
}