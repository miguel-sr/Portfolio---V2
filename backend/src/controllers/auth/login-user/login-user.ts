import { User } from "../../../models/user";
import { badRequest, ok, serverError } from "../../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../../protocols";
import { ILoginUserParams, ILoginUserRepository } from "./protocols";

export class LoginUserController implements IController {
  constructor(private readonly loginUserRepository: ILoginUserRepository) {}
  async handle(
    httpRequest: IHttpRequest<ILoginUserParams>
  ): Promise<IHttpResponse<User | string>> {
    try {
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Body missing filds.");
      }

      const user = await this.loginUserRepository.loginUser(body);
      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
