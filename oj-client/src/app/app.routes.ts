import {Routes, RouterModule} from "@angular/router";
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: 'callback',
        component: LoadingComponent
    },
    {
        path: 'problems',
        component: ProblemListComponent
    },
    {
        path: 'problems/difficulty/:diff',
        component: ProblemListComponent
    },
    {
        path: 'problems/keywords/:keywords',
        component: ProblemListComponent
    },
    {
        path: 'problems/:id',                   //this ":" means id is a variable
        component: ProblemDetailComponent
    },
    
    {
        path: '**',
        redirectTo: 'problems'
    }
];

export const Routing = RouterModule.forRoot(routes);