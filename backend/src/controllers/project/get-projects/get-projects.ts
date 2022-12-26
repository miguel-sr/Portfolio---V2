import { Project } from "../../../models/project";
import { ok, serverError } from "../../helpers";
import { IController, IHttpResponse } from "../../protocols";
import { IGetProjectsRepository } from "./protocols";

export class GetProjectsController implements IController {
  constructor(private readonly getProjectsRepository: IGetProjectsRepository) {}

  async handle(): Promise<IHttpResponse<Project[] | string>> {
    try {
      const projects = await this.getProjectsRepository.getProjects();
      return ok<Project[]>(projects);
    } catch (error) {
      return serverError();
    }
  }
}
