import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data/data.service';
import {CollaborationService} from './services/Collaboration/collaboration.service';
import { AuthService } from './services/Auth/auth.service';

import {Routing} from './app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CurserListComponent } from './components/curser-list/curser-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent,
    UserProfileComponent,
    LoadingComponent,
    CurserListComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    CollaborationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
