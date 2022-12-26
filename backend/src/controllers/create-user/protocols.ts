import { User } from "../../models/user";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
  credentials: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<User>;
}
