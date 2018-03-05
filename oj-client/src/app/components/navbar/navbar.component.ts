import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = "Coder Space";
  keywords: String;
  username: String = "user";
  profile: any;
  //router: Router;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if ( this.authService.isAuthenticated) {
      if (this.authService.userProfile) {
        this.profile = this.authService.userProfile;
        this.username = this.profile["nickname"];
      } else {
        this.authService.getProfile((err, profile) => {
          this.profile = profile;
          this.username = this.profile["nickname"];
        });
      }
    } else {
      this.username = "User";
       }
  }

  searchProblem(): void {
    //alert(this.keywords);
    console.log(this.keywords);
    if (this.keywords)
      this.router.navigate(['/problems/keywords',this.keywords]);
    else 
      this.router.navigate(['/problems']);
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
    this.username = "user";
  }
}
