import { Project } from "../models/project";
import { Skill } from "../models/skill";
import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;
export type MongoSkill = Omit<Skill, "id">;
export type MongoProject = Omit<Project, "id">;
