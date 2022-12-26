import { IGetProjectsRepository } from "../../../controllers/project/get-projects/protocols";
import { MongoClient } from "../../../database/mongo";
import { Project } from "../../../models/project";
import { MongoProject } from "../../mongo-protocols";

export class MongoGetProjectsRepository implements IGetProjectsRepository {
  async getProjects(): Promise<Project[]> {
    const projects = await MongoClient.db
      .collection<MongoProject>("projects")
      .find({})
      .toArray();

    return projects.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
