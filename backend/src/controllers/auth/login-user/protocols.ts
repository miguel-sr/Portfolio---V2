import { User } from "../../../models/user";

export interface ILoginUserParams {
  email: string;
  password: string;
}

export interface ILoginUserRepository {
  loginUser(params: ILoginUserParams): Promise<User>;
}
