import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CoordinationTasksComponent} from './components/coordination-tasks/coordination-tasks.component';
import {ReviewTasksComponent} from './components/review-tasks/review-tasks.component';
import {CurrentTasksComponent} from './components/current-tasks/current-tasks.component';
import {TemplatesComponent} from './components/templates/templates.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      { path: 'coordination', component: CoordinationTasksComponent },
      { path: 'review', component: ReviewTasksComponent },
      { path: 'current', component: CurrentTasksComponent },
      { path: 'templates', component: TemplatesComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
