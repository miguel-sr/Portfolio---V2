import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { IController, IHttpResponse } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<IHttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();
      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
