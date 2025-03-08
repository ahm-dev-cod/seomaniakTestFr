import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
 // { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeomaniakTestRoutingModule { }
