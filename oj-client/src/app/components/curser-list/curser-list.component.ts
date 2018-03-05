import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/Collaboration/collaboration.service';
import { Curser } from '../../models/curser.model';

@Component({
  selector: 'app-curser-list',
  templateUrl: './curser-list.component.html',
  styleUrls: ['./curser-list.component.css']
})
export class CurserListComponent implements OnInit {
  curserList: Curser[];

  constructor(private collaboration: CollaborationService) { }

  ngOnInit() {
    this.init();
    console.log('curser list: ' + this.curserList);
  }

  init(): void {
    this.curserList = this.collaboration.cursersInfo;
  }
}
