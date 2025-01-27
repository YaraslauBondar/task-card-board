import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import {NgOptimizedImage} from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { CurrentTasksComponent } from './components/current-tasks/current-tasks.component';
import { ReviewTasksComponent } from './components/review-tasks/review-tasks.component';
import { CoordinationTasksComponent } from './components/coordination-tasks/coordination-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    TaskCardComponent,
    HeaderComponent,
    FilterComponent,
    HomeComponent,
    TemplatesComponent,
    CurrentTasksComponent,
    ReviewTasksComponent,
    CoordinationTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
