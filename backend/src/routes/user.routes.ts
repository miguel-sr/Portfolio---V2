import { Router } from "express";
import { CreateUserController } from "../controllers/user/create-user/create-user";
import { DeleteUserController } from "../controllers/user/delete-user/delete-user";
import { GetUsersController } from "../controllers/user/get-users/get-users";
import { LoginUserController } from "../controllers/user/login-user/login-user";
import { UpdateUserController } from "../controllers/user/update-user/update-user";
import { MongoCreateUserRepository } from "../repositories/user/create-user/mongo-create-user";
import { MongoDeleteUserRepository } from "../repositories/user/delete-user/mongo-delete-user";
import { MongoGetUsersRepository } from "../repositories/user/get-users/mongo-get-users";
import { MongoLoginUserRepository } from "../repositories/user/login-user/mongo-login-user";
import { MongoUpdateUserRepository } from "../repositories/user/update-user/mongo-update-user";
const routes = Router();

routes.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersController = new GetUsersController(mongoGetUsersRepository);
  const { body, statusCode } = await getUsersController.handle();
  res.status(statusCode).send(body);
});

routes.post("/users", async (req, res) => {
  const mongoCreateUsersRepository = new MongoCreateUserRepository();
  const createUsersController = new CreateUserController(
    mongoCreateUsersRepository
  );
  const { body, statusCode } = await createUsersController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.post("/login", async (req, res) => {
  const mongoLoginUserRepository = new MongoLoginUserRepository();
  const loginUsersController = new LoginUserController(
    mongoLoginUserRepository
  );
  const { body, statusCode } = await loginUsersController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/users/:id", async (req, res) => {
  const mongoUpdateUserRepository = new MongoUpdateUserRepository();
  const updateUserController = new UpdateUserController(
    mongoUpdateUserRepository
  );
  const { body, statusCode } = await updateUserController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/users/:id", async (req, res) => {
  const mongoDeleteUserRepository = new MongoDeleteUserRepository();
  const deleteUserController = new DeleteUserController(
    mongoDeleteUserRepository
  );
  const { body, statusCode } = await deleteUserController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
