import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'CbrHmOyOxkeFTQjpw3nbHEg5vY4RGR4s',
    domain: 'wenzx94.auth0.com',
    responseType: 'token id_token',
    audience: 'https://wenzx94.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {}

  userProfile: any;

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/problems']);
      } else if (err) {
        this.router.navigate(['/problems']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  private _profileSource = new BehaviorSubject<any>([]);

  getProfiles(): Observable<any> {
    // return this.problems;
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken).toPromise()
    .then((profile: any) => {
      this._profileSource.next(profile);
    })
    return this._profileSource.asObservable();
  }
  
  

}
