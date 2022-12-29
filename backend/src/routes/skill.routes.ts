import { Router } from "express";
import auth from "../middlewares/auth";
import { CreateSkillController } from "../controllers/skill/create-skill/create-skill";
import { GetSkillsController } from "../controllers/skill/get-skills/get-skills";
import { MongoCreateSkillRepository } from "../repositories/skill/create-skill/mongo-create-skill";
import { MongoGetSkillsRepository } from "../repositories/skill/get-skills/mongo-get-skills";
import { MongoUpdateSkillRepository } from "../repositories/skill/update-skill/mongo-update-skill";
import { UpdateSkillController } from "../controllers/skill/update-skill/update-skill";
import { MongoDeleteSkillRepository } from "../repositories/skill/delete-skill/mongo-delete-skill";
import { DeleteSkillController } from "../controllers/skill/delete-skill/delete-skill";
const routes = Router();

routes.get("/skills/:id?", auth, async (req, res) => {
  const mongoGetSkillsRepository = new MongoGetSkillsRepository();
  const getSkillsController = new GetSkillsController(mongoGetSkillsRepository);
  const { body, statusCode } = await getSkillsController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.post("/skills", auth, async (req, res) => {
  const mongoCreateSkillRepository = new MongoCreateSkillRepository();
  const createSkillController = new CreateSkillController(
    mongoCreateSkillRepository
  );
  const { body, statusCode } = await createSkillController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/skills/:id", auth, async (req, res) => {
  const mongoUpdateSkillRepository = new MongoUpdateSkillRepository();
  const updateSkillController = new UpdateSkillController(
    mongoUpdateSkillRepository
  );
  const { body, statusCode } = await updateSkillController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/skills/:id", auth, async (req, res) => {
  const mongoDeleteSkillRepository = new MongoDeleteSkillRepository();
  const deleteSkillController = new DeleteSkillController(
    mongoDeleteSkillRepository
  );
  const { body, statusCode } = await deleteSkillController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
