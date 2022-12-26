import { Skill } from "../../../models/skill";
import { ok, serverError } from "../../helpers";
import { IController, IHttpResponse } from "../../protocols";
import { IGetSkillsRepository } from "./protocols";

export class GetSkillsController implements IController {
  constructor(private readonly getSkillsRepository: IGetSkillsRepository) {}

  async handle(): Promise<IHttpResponse<Skill[] | string>> {
    try {
      const skills = await this.getSkillsRepository.getSkills();
      return ok<Skill[]>(skills);
    } catch (error) {
      return serverError();
    }
  }
}
