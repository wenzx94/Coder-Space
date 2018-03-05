import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor( 
    private authService: AuthService,
    private router: Router
   ) { }

  ngOnInit() {
    //this.redirect();
  }
  redirect(): void {
    if ( this.authService.isAuthenticated()) this.router.navigate(['/problems']);
  }

}
