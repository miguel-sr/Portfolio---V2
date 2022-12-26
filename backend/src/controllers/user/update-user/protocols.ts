import { User } from "../../../models/user";

export interface IUpdateUserParams {
  name?: string;
  email?: string;
  password?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<User>;
}
