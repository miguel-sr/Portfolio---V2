import { Skill } from "../../../models/skill";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteSkillRepository } from "./protocols";

export class DeleteSkillController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteSkillRepository) {}
  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Skill | string>> {
    try {
      const id = httpRequest?.params?.id;
      if (!id) {
        return badRequest("Missing skill id.");
      }
      const skill = await this.deleteUserRepository.deleteSkill(id);
      return ok<Skill>(skill);
    } catch (error) {
      return serverError();
    }
  }
}
