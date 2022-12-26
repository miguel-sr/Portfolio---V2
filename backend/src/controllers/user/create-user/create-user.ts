import validator from "validator";
import bcrypt from "bcryptjs";
import { User } from "../../../models/user";
import { badRequest, created, serverError } from "../helpers";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<User | string>> {
    try {
      const requiredFields = ["name", "email", "password"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]?.length) {
          return badRequest(`Field ${field} is required.`);
        }
      }

      if (httpRequest.body) {
        const emailIsValid = validator.isEmail(httpRequest.body.email);
        if (!emailIsValid) {
          return badRequest("E-mail is invalid.");
        }

        httpRequest.body.password = await bcrypt.hash(
          httpRequest.body.password,
          8
        );

        httpRequest.body.credentials = "guest";

        const user = await this.createUserRepository.createUser(
          httpRequest.body
        );

        return created<User>(user);
      }
      return serverError();
    } catch (error) {
      return serverError();
    }
  }
}
