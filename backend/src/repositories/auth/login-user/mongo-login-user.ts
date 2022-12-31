import bcrypt from "bcryptjs";
import {
  ILoginUserParams,
  ILoginUserRepository,
} from "../../../controllers/user/login-user/protocols";
import { MongoClient } from "../../../database/mongo";
import { User } from "../../../models/user";
import jwtService from "../../../services/jwt.service";
import { MongoUser } from "../../mongo-protocols";

// ==> Repository Pattern
export class MongoLoginUserRepository implements ILoginUserRepository {
  async loginUser(params: ILoginUserParams): Promise<User> {
    let user = await MongoClient.db
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

    await MongoClient.db.collection("users").updateOne(
      { _id: user._id },
      {
        $set: {
          token: jwtService.sign(MongoClient.map(user)),
        },
      }
    );

    user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ email: params.email });

    return MongoClient.map(user);
  }
}
