import {
  IUpdateSkillParams,
  IUpdateSkillRepository,
} from "../../../controllers/skill/update-skill/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { Skill } from "../../../models/skill";
import { MongoSkill } from "../../mongo-protocols";

export class MongoUpdateSkillRepository implements IUpdateSkillRepository {
  async updateSkill(id: string, params: IUpdateSkillParams): Promise<Skill> {
    await MongoClient.db.collection("skills").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const skill = await MongoClient.db
      .collection<MongoSkill>("skills")
      .findOne({ _id: new ObjectId(id) });

    if (!skill) {
      throw new Error("Skill not updated");
    }

    return MongoClient.map(skill);
  }
}
