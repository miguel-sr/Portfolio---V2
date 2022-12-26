import { Project } from "../../../models/project";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteProjectRepository } from "./protocols";

export class DeleteProjectController implements IController {
  constructor(
    private readonly deleteProjectRepository: IDeleteProjectRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Project | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing project id.");
      }
      const project = await this.deleteProjectRepository.deleteProject(id);
      return ok<Project>(project);
    } catch (error) {
      return serverError();
    }
  }
}
