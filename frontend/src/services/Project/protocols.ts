export interface ICreateProjectParams {
  name: string;
  description: string;
  deploy_url?: string;
  github_url: string;
  skills: string[];
  coverImage: string;
  fullPageImage: string;
}

export interface IUpdateProjectParams {
  name?: string;
  description?: string;
  deploy_url?: string;
  github_url?: string;
  skills?: string[];
  coverImage?: string;
  fullPageImage?: string;
}
