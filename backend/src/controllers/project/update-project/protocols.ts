import { Project } from "../../../models/project";
import { Skill } from "../../../models/skill";

export interface IUpdateProjectParams {
  name?: string;
  description?: string;
  deploy_url?: string;
  github_url?: string;
  skills?: Skill[];
  images?: string[];
}

export interface IUpdateProjectRepository {
  updateProject(id: string, params: IUpdateProjectParams): Promise<Project>;
}
