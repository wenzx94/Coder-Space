import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = "Coder Space";
  keywords: String;
  //router: Router;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchProblem(): void {
    //alert(this.keywords);
    console.log(this.keywords);
    if (this.keywords)
      this.router.navigate(['/problems/keywords',this.keywords]);
    else 
      this.router.navigate(['/problems']);
    
  }
}
