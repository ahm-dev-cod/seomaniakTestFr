import { TaskDTO } from "./task-dto.model";

export interface ProjectDTO {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tasks?: TaskDTO[];
}
