import { IGetSkillsRepository } from "../../../controllers/skill/get-skills/protocols";
import { MongoClient } from "../../../database/mongo";
import { Skill } from "../../../models/skill";
import { MongoSkill } from "../../mongo-protocols";

// ==> Repository Pattern
export class MongoGetSkillsRepository implements IGetSkillsRepository {
  async getSkills(): Promise<Skill[]> {
    const users = await MongoClient.db
      .collection<MongoSkill>("skills")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
