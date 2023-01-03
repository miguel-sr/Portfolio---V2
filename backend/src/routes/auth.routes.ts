import { Router } from "express";
import { LoginUserController } from "../controllers/user/login-user/login-user";
import auth from "../middlewares/auth";
import { MongoLoginUserRepository } from "../repositories/user/login-user/mongo-login-user";
import getCache from "../services/cache.service";
import jwtService from "../services/jwt.service";
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

routes.post("/logout", auth, async (req, res) => {
  const redisClient = await getCache();

  if (!req.headers.authorization) {
    return res.status(400).json("Missing authorization header.");
  }

  const token = req.headers.authorization.replace("Bearer ", "");
  const decoded = jwtService.verify(token);

  const token_key = `bl_${token}`;
  redisClient.set(token_key, token);
  redisClient.expireAt(token_key, decoded.exp);

  return res.status(200).send("Token invalidated.");
});

export default routes;
