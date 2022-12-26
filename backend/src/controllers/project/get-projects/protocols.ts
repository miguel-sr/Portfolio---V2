import { Project } from "../../../models/project";

export interface IGetProjectsRepository {
  getProjects(): Promise<Project[]>;
}
