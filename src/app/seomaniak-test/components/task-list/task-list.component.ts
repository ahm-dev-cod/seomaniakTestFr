import { Component } from '@angular/core';
import { TaskDTO } from '../../models/task-dto.model';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: TaskDTO[] = [];
  searchTitle: string = '';
  searchStatus: string = '';

  constructor(private taskService: TaskService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  // Charger toutes les tâches
  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  // Rechercher des tâches
  search(): void {
    this.taskService.searchTasks(this.searchTitle, this.searchStatus).subscribe(data => {
      this.tasks = data;
    });
  }

  // Naviguer vers la page d'ajout de tâche
  navigateToAddTask(): void {
    this.router.navigate(['/tasks/add']);
  }
}
