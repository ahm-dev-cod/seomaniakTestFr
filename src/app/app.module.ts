import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SeomaniakTestModule } from './seomaniak-test/seomaniak-test.module';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './seomaniak-test/components/project-list/project-list.component';
import { TaskListComponent } from './seomaniak-test/components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SeomaniakTestModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
