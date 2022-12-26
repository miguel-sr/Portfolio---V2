import {
  IUpdateProjectParams,
  IUpdateProjectRepository,
} from "../../../controllers/project/update-project/protocols";
import { ObjectId } from "mongodb";
import { MongoClient } from "../../../database/mongo";
import { MongoProject } from "../../mongo-protocols";
import { Project } from "../../../models/project";

export class MongoUpdateProjectRepository implements IUpdateProjectRepository {
  async updateProject(
    id: string,
    params: IUpdateProjectParams
  ): Promise<Project> {
    await MongoClient.db.collection("projects").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const project = await MongoClient.db
      .collection<MongoProject>("projects")
      .findOne({ _id: new ObjectId(id) });

    if (!project) {
      throw new Error("Project not updated");
    }

    return MongoClient.map(project);
  }
}
