import { ObjectId } from "mongodb";
import { IDeleteSkillRepository } from "../../../controllers/skill/delete-skill/protocols";
import { MongoClient } from "../../../database/mongo";
import { Skill } from "../../../models/skill";
import { MongoUser } from "../../mongo-protocols";

export class MongoDeleteSkillRepository implements IDeleteSkillRepository {
  async deleteSkill(id: string): Promise<Skill> {
    const skill = await MongoClient.db
      .collection<MongoUser>("skills")
      .findOne({ _id: new ObjectId(id) });

    if (!skill) {
      throw new Error("Skill not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("skills")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Skill not deleted.");
    }

    return MongoClient.map(skill);
  }
}
