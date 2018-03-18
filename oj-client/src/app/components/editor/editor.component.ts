import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollaborationService } from '../../services/Collaboration/collaboration.service';
import { DataService } from '../../services/data/data.service';
import { AuthService } from '../../services/Auth/auth.service';

declare var ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  sessionId: string;
  language: string = 'Java';
  languages: string[] = ['Java', 'Python'];
  output: string = '';
  defaultContent = {
    'Java': `public class Example {
 public static void main(String[] args) {
     // Type your Java code here
 }
}`,
    'Python': `class Solution:
   def example():
       # Write your Python code here`
  };

  cursorList: Object;
  cursorInfo: string;
  keys: string[] = [];
  profile: any = {
    sub: 'not-log-in',
    nickname: 'Visitor'
  };
  username: string = "username";
  problem: any = {};

  constructor(private collaboration: CollaborationService,
              private route: ActivatedRoute,
              private data: DataService,
              private auth: AuthService
            ) { }

  ngOnInit() {
    if( this.auth.isAuthenticated()) {
    if (this.auth.userProfile) {
      console.log("fetched");
      this.profile = this.auth.userProfile;
      this.username = this.profile["nickname"];
    } else {
      //this.getProfile();
      this.auth.getProfile((err, profile) => {
        if(profile) {
          this.profile = profile;
          this.username = this.profile["nickname"];
        }
        if(err) console.log("fetched failed");
      });
    }
  }
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        this.initEditor();
        this.data.getProblem(+params['id'])
        .then(problem => this.problem = problem);
      });
    // this.collaboration._curserSource.asObservable().subscribe(
    //   cursorList => JSON.stringify(cursorList)
    // );
      
      //console.log("username: " + this.profile["nickname"])

  }

  initEditor(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.$blockScrolling = Infinity;
    this.resetEditor();

    this.collaboration.init(this.sessionId, this.editor, this.cursorInfo);
    this.editor.lastAppliedChange = null;

    // regist change callbacks
    this.editor.on('change', (e) => {
      console.log('editor changes: ' + JSON.stringify(e));
      if (this.editor.lastAppliedChange != e) {
        e['subId'] = this.profile["sub"];
        e['nickname'] = this.profile["nickname"];
        this.collaboration.change(JSON.stringify(e));
      }
    });

    this.editor.getSession().getSelection().on('changeCursor', ()=> {
      const cursor = this.editor.getSession().getSelection().getCursor();
      console.log('cursor log from client ' + JSON.stringify(cursor));
      cursor["subId"] = this.profile["sub"];
      cursor["nickname"] = this.profile["nickname"];
      this.collaboration.cursorMove(JSON.stringify(cursor));
      //this.cursorList = this.collaboration.clientsInfo;
      this.cursorList = this.collaboration.cursorsInfo;
      this.keys = Object.keys(this.cursorList);
      //console.log(this.collaboration.cursorsInfo);
      this.cursorInfo = JSON.stringify(this.cursorList);
    });

    this.collaboration.restoreBuffer();
  }

  resetEditor(): void {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
    this.output = '';
  }

  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }

  submit(): void {
    const userCodes = this.editor.getValue();
    //console.log(userCodes);
    const data = {
      userCodes: userCodes,
      lang: this.language.toLowerCase()
    };
    this.data.buildAndRun(data)
      .then(res => this.output = res.text);
  }

  updateCursorList(): void {

  }

}