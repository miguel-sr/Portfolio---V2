import { ObjectId } from "mongodb";
import { IGetProjectsRepository } from "../../../controllers/project/get-projects/protocols";
import { MongoClient } from "../../../database/mongo";
import { Project } from "../../../models/project";
import { MongoProject } from "../../mongo-protocols";

export class MongoGetProjectsRepository implements IGetProjectsRepository {
  async getProjects(id?: string): Promise<Project[] | Project> {
    if (id) {
      const project = await MongoClient.db
        .collection<MongoProject>("projects")
        .findOne({ _id: new ObjectId(id) });

      if (!project) {
        throw new Error("Project not found.");
      }

      return MongoClient.map(project);
    } else {
      const projects = await MongoClient.db
        .collection<MongoProject>("projects")
        .find({})
        .toArray();

      return MongoClient.mapArray<MongoProject>(projects);
    }
  }
}
