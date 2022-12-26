import { Skill } from "../../../models/skill";

export interface ICreateSkillParams {
  name: string;
  icon: string;
}

export interface ICreateSkillRepository {
  createSkill(params: ICreateSkillParams): Promise<Skill>;
}
