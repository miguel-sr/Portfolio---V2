import { Project } from "../../../models/project";
import { Skill } from "../../../models/skill";

export interface ICreateProjectParams {
  name: string;
  description: string;
  deploy_url?: string;
  github_url: string;
  skills: Skill[];
  coverImage: string;
  fullPageImage: string;
}

export interface ICreateProjectRepository {
  createProject(params: ICreateProjectParams): Promise<Project>;
}
