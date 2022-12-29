import { Skill } from "../../../models/skill";

export interface IGetSkillsRepository {
  getSkills(id?: string): Promise<Skill[] | Skill>;
}
