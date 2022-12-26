import { Project } from "../../../models/project";

export interface IDeleteProjectRepository {
  deleteProject(id: string): Promise<Project>;
}
