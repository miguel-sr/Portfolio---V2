import { Project } from "../../../models/project";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateProjectParams, IUpdateProjectRepository } from "./protocols";

export class UpdateProjectController implements IController {
  constructor(
    private readonly updateProjectRepository: IUpdateProjectRepository
  ) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateProjectParams>
  ): Promise<IHttpResponse<Project | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing user id.");
      }

      if (!body) {
        return badRequest("Body missing filds.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateProjectParams)[] = [
        "name",
        "description",
        "deploy_url",
        "github_url",
        "skills",
        "coverImage",
        "fullPageImage",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateProjectParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const project = await this.updateProjectRepository.updateProject(
        id,
        body
      );
      return ok<Project>(project);
    } catch (error) {
      return serverError();
    }
  }
}
