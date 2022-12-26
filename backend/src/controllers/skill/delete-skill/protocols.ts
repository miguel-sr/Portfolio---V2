import { Skill } from "../../../models/skill";

export interface IDeleteSkillRepository {
  deleteSkill(id: string): Promise<Skill>;
}
