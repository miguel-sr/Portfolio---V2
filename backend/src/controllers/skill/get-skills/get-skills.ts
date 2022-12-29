import { Skill } from "../../../models/skill";
import { ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { IGetSkillsRepository } from "./protocols";

export class GetSkillsController implements IController {
  constructor(private readonly getSkillsRepository: IGetSkillsRepository) {}

  async handle(
    httpRequest: IHttpRequest<unknown>
  ): Promise<IHttpResponse<Skill[] | Skill | string>> {
    try {
      const id = httpRequest?.params?.id;
      const skills = await this.getSkillsRepository.getSkills(id);
      return ok<Skill[] | Skill>(skills);
    } catch (error) {
      return serverError();
    }
  }
}
