import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskListComponent } from "../app/task-list/task-list.component";
import { HeaderComponent } from "../app/header/header.component";
import { InsideTaskListComponent } from './task-list/inside-task-list/inside-task-list.component';

@NgModule({
  declarations: [AppComponent, TaskListComponent, HeaderComponent, InsideTaskListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
