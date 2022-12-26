import { Skill } from "../../../models/skill";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IUpdateSkillParams, IUpdateSkillRepository } from "./protocols";

export class UpdateSkillController implements IController {
  constructor(private readonly updateSkillRepository: IUpdateSkillRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateSkillParams>
  ): Promise<IHttpResponse<Skill | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing user id.");
      }

      if (!body) {
        return badRequest("Body missing filds.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateSkillParams)[] = [
        "name",
        "icon",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) =>
          !allowedFieldsToUpdate.includes(key as keyof IUpdateSkillParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const skill = await this.updateSkillRepository.updateSkill(id, body);
      return ok<Skill>(skill);
    } catch (error) {
      return serverError();
    }
  }
}
