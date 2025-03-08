import { Component } from '@angular/core';
import { ProjectDTO } from '../../models/project-dto.model';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: ProjectDTO[] = [];

  constructor(private projectService: ProjectService,
      private router:Router
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getAllProjects().subscribe(data => {
      this.projects = data;
    });
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => {
      this.projects = this.projects.filter(project => project.id !== id);
    });
  }

   // Naviguer vers la liste des tâches
  navigateToTaskList(): void {
    this.router.navigate(['/tasks']);
  }
}
