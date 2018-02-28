import { Component, OnInit } from '@angular/core'; // add ngOnDestroy
import { ActivatedRoute, Params } from '@angular/router';
import { Problem } from '../../models/problem.model';
import { PROBLEMS } from '../../mock-problems';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

   //add unsubscribe in ngOnDestroy
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if ( params['diff']) {
        this.dataService.getProblemsByDiff(params['diff'])
          .then(problems => this.problems = problems);
      } else if ( params['keywords'] ) {
        this.dataService.searchProblems(params['keywords'])
          .then(problems => this.problems = problems);
      } else {
        this.getProblems();
      }
    });
  }

  getProblems(): void {
    // this.problems = this.dataService.getProblems();
    this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }

}
