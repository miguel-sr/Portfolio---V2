import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

    await MongoClient.db.collection("users").updateOne(
      { _id: user._id },
      {
        $set: {
          token: await this.generateAuthToken(MongoClient.map(user)),
        },
      }
    );

    return MongoClient.map(user);
  }

  async generateAuthToken(user: User) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      credentials: user.credentials,
    };

    const secret =
      process.env.ACCESS_TOKEN_SECRET ||
      "e675a37256c0da1905d11a71bd275d7c6ee68d0a39ca8ef7af79674a0f766950";
    const options = {
      expiresIn: "1h",
    };

    return jwt.sign(payload, secret, options);
  }
}
