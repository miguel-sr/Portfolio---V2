import { ObjectId } from "mongodb";
import { IGetSkillsRepository } from "../../../controllers/skill/get-skills/protocols";
import { MongoClient } from "../../../database/mongo";
import { Skill } from "../../../models/skill";
import { MongoSkill } from "../../mongo-protocols";

// ==> Repository Pattern
export class MongoGetSkillsRepository implements IGetSkillsRepository {
  async getSkills(id?: string): Promise<Skill[] | Skill> {
    if (id) {
      const skill = await MongoClient.db
        .collection<MongoSkill>("skills")
        .findOne({ _id: new ObjectId(id) });

      if (!skill) {
        throw new Error("Skill not found.");
      }

      return MongoClient.map(skill);
    } else {
      const skills = await MongoClient.db
        .collection<MongoSkill>("skills")
        .find({})
        .toArray();

      return MongoClient.mapArray<MongoSkill>(skills);
    }
  }
}
