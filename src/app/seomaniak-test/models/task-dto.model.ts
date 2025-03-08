export interface TaskDTO {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
  project_id: number;
}
