import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";
import { MongoUser } from "../mongo-protocols";

// ==> Repository Pattern
export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}

/* ==> Se necessária mudança de BD, é possível apenas criar outro repository 
que continue respeitando a interface, mesmo usando outro banco de dados */
// export class PostgreeGetUsersRepository implements IGetUsersRepository {
//   async getUsers(): Promise<User[]> {}
// }
