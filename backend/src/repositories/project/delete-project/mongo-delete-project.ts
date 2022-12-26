import { ObjectId } from "mongodb";
import { IDeleteProjectRepository } from "../../../controllers/project/delete-project/protocols";
import { MongoClient } from "../../../database/mongo";
import { Project } from "../../../models/project";
import { MongoProject } from "../../mongo-protocols";

export class MongoDeleteProjectRepository implements IDeleteProjectRepository {
  async deleteProject(id: string): Promise<Project> {
    const project = await MongoClient.db
      .collection<MongoProject>("projects")
      .findOne({ _id: new ObjectId(id) });

    if (!project) {
      throw new Error("Skill not found.");
    }

    const { deletedCount } = await MongoClient.db
      .collection("projects")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Project not deleted.");
    }

    return MongoClient.map(project);
  }
}
