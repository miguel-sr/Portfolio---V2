import { badRequest, created, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateSkillParams, ICreateSkillRepository } from "./protocols";
import { Skill } from "../../../models/skill";

export class CreateSkillController implements IController {
  constructor(private readonly createSkillRepository: ICreateSkillRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateSkillParams>
  ): Promise<IHttpResponse<Skill | string>> {
    try {
      const requiredFields = ["name", "icon"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateSkillParams]?.length) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const skill = await this.createSkillRepository.createSkill(
          httpRequest.body
        );

        return created<Skill>(skill);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
