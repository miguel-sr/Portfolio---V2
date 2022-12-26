import { Skill } from "../../../models/skill";

export interface IUpdateSkillParams {
  name?: string;
  icon?: string;
}

export interface IUpdateSkillRepository {
  updateSkill(id: string, params: IUpdateSkillParams): Promise<Skill>;
}
