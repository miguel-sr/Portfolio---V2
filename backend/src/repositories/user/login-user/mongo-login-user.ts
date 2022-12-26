import bcrypt from "bcryptjs";
import {
  ILoginUserParams,
  ILoginUserRepository,
} from "../../../controllers/user/login-user/protocols";
import { MongoClient } from "../../../database/mongo";
import { User } from "../../../models/user";
import { MongoUser } from "../../mongo-protocols";

// ==> Repository Pattern
export class MongoLoginUserRepository implements ILoginUserRepository {
  async loginUser(params: ILoginUserParams): Promise<User> {
    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ email: params.email });

    if (!user) {
      throw new Error("Invalid login!");
    }

    const isPasswordMatch = await bcrypt.compare(
      params.password,
      user.password
    );

    if (!isPasswordMatch) {
      throw new Error("Invalid login!");
    }

    return MongoClient.map(user);
  }
}
