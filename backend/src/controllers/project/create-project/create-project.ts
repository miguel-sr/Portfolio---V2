import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateProjectParams, ICreateProjectRepository } from "./protocols";
import { Project } from "../../../models/project";

export class CreateProjectController implements IController {
  constructor(
    private readonly createProjectRepository: ICreateProjectRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<ICreateProjectParams>
  ): Promise<IHttpResponse<Project | string>> {
    try {
      const requiredFields = ["name", "description", "github_url", "skills", "images"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateProjectParams]?.length) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const project = await this.createProjectRepository.createProject(
          httpRequest.body
        );

        return created<Project>(project);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
