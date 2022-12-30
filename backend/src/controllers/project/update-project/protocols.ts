import { Project } from "../../../models/project";

export interface IUpdateProjectParams {
  name?: string;
  description?: string;
  deploy_url?: string;
  github_url?: string;
  skills?: string[];
  coverImage?: string;
  fullPageImage?: string;
}

export interface IUpdateProjectRepository {
  updateProject(id: string, params: IUpdateProjectParams): Promise<Project>;
}
