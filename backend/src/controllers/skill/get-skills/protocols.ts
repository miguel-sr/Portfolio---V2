import { Skill } from "../../../models/skill";

export interface IGetSkillsRepository {
  getSkills(): Promise<Skill[]>;
}
