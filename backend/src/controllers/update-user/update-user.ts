import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { IUpdateUserParams, IUpdateUserRepository } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}
  async handle(
    httpRequest: IHttpRequest<IUpdateUserParams>
  ): Promise<IHttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Missing user id.");
      }

      if (!body) {
        return badRequest("Body missing filds.");
      }

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "name",
        "email",
        "password",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed.");
      }

      const user = await this.updateUserRepository.updateUser(id, body);
      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
