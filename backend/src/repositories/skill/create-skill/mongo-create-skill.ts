import {
  ICreateSkillParams,
  ICreateSkillRepository,
} from "../../../controllers/skill/create-skill/protocols";
import { MongoClient } from "../../../database/mongo";
import { Skill } from "../../../models/skill";
import { MongoSkill } from "../../mongo-protocols";

export class MongoCreateSkillRepository implements ICreateSkillRepository {
  async createSkill(params: ICreateSkillParams): Promise<Skill> {
    const { insertedId } = await MongoClient.db
      .collection("skills")
      .insertOne(params);

    const skill = await MongoClient.db
      .collection<MongoSkill>("skills")
      .findOne({ _id: insertedId });

    if (!skill) {
      throw new Error("Skill not created");
    }

    return MongoClient.map(skill);
  }
}
