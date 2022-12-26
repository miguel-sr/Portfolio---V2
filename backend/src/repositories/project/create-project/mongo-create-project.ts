import {
  ICreateProjectParams,
  ICreateProjectRepository,
} from "../../../controllers/project/create-project/protocols";
import { MongoClient } from "../../../database/mongo";
import { Project } from "../../../models/project";
import { MongoProject } from "../../mongo-protocols";

export class MongoCreateProjectRepository implements ICreateProjectRepository {
  async createProject(params: ICreateProjectParams): Promise<Project> {
    const { insertedId } = await MongoClient.db
      .collection("projects")
      .insertOne(params);

    const project = await MongoClient.db
      .collection<MongoProject>("projects")
      .findOne({ _id: insertedId });

    if (!project) {
      throw new Error("Project not created");
    }

    return MongoClient.map(project);
  }
}
