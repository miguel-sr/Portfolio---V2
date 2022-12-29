import { Project } from "../../../models/project";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetProjectsRepository } from "./protocols";

export class GetProjectsController implements IController {
  constructor(private readonly getProjectsRepository: IGetProjectsRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Project[] | Project | string>> {
    try {
      const id = httpRequest?.params?.id;
      const projects = await this.getProjectsRepository.getProjects(id);
      return ok<Project[] | Project>(projects);
    } catch (error) {
      return serverError();
    }
  }
}
