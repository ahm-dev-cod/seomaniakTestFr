import { Injectable } from '@angular/core';
import { TaskDTO } from '../models/task-dto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/api/tasks'; // URL du backend Spring Boot

  constructor(private http: HttpClient) { }

  // Récupérer toutes les tâches
  getAllTasks(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(this.apiUrl);
  }

  // Rechercher des tâches par titre et/ou statut
  searchTasks(title?: string, status?: string): Observable<TaskDTO[]> {
    const params: any = {};
    if (title) params.title = title;
    if (status) params.status = status;

    return this.http.get<TaskDTO[]>(`${this.apiUrl}/search`, { params });
  }

  //  // Récupérer les tâches associées à un projet par son ID
  // getTasksByProjectId(projectId: number): Observable<TaskDTO[]> {
  //   return this.http.get<TaskDTO[]>(`${this.apiUrl}/projects/${projectId}/tasks`);
  // }
}
