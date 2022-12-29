import { Project } from "../../../models/project";

export interface IGetProjectsRepository {
  getProjects(id?: string): Promise<Project[] | Project>;
}
