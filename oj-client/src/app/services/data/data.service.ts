import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Problem } from '../../models/problem.model';
// import { PROBLEMS } from '../../mock-problems';

@Injectable()
export class DataService {
  // problems: Problem[] = PROBLEMS;
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) { }

  getProblems(): Observable<Problem[]> {
    // return this.problems;
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: any) => {
        this._problemSource.next(res);
      })
      .catch(this.handleError);
    return this._problemSource.asObservable();
  }

  getProblemsByDiff(difficulty: String): Promise<Problem[]> {
    return this.http.get(`api/v1/problems/difficulty/${difficulty}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: Response) => res)
      .catch(this.handleError);
  }

  searchProblems(keywords: String): Promise<Problem[]> {
    return this.http.get(`api/v1/problems/keywords/${keywords}`)
    .toPromise()
    .then((res: Response) => res)
    .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('api/v1/problems', problem, {headers})
      .toPromise()
      .then((res: any) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.body || error);
  }

  buildAndRun(data): Promise<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('/api/v1/build_and_run', data, {headers})
      .toPromise()
      .then((res: Response) => {
        console.log(res);
        return res;
      })
      .catch(this.handleError);
  }
}
