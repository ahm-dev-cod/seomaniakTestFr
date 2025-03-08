import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDTO } from '../models/project-dto.model';
import { Observable } from 'rxjs';
import { TaskDTO } from '../models/task-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<ProjectDTO[]> {
    return this.http.get<ProjectDTO[]>(this.apiUrl);
  }

  createProject(project: ProjectDTO): Observable<ProjectDTO> {
    return this.http.post<ProjectDTO>(this.apiUrl, project);
  }

  updateProject(id: number, project: ProjectDTO): Observable<ProjectDTO> {
    return this.http.patch<ProjectDTO>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  // getTasksByProjectId(projectId: number): Observable<TaskDTO[]> {
  //   return this.http.get<TaskDTO[]>(`${this.apiUrl}/${projectId}/tasks`);
  // }

  // getProjectById(id: number): Observable<ProjectDTO> {
  //   return this.http.get<ProjectDTO>(`${this.apiUrl}/${id}`);
  // }
}
