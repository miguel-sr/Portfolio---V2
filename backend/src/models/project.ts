import { Skill } from "./skill";

export interface Project {
  id: string;
  name: string;
  description: string;
  deploy_url: string;
  github_url: string;
  skills: Skill[];
  images: string[];
}