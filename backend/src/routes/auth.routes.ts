import { Router } from "express";
import { LoginUserController } from "../controllers/user/login-user/login-user";
import { MongoLoginUserRepository } from "../repositories/auth/login-user/mongo-login-user";
const routes = Router();

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

export default routes;
