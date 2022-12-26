import { Router } from "express";
import auth from "../middlewares/auth";
import { GetProjectsController } from "../controllers/project/get-projects/get-projects";
import { MongoGetProjectsRepository } from "../repositories/project/get-projects/mongo-get-projects";
import { CreateProjectController } from "../controllers/project/create-project/create-project";
import { MongoCreateProjectRepository } from "../repositories/project/create-project/mongo-create-project";
import { MongoUpdateProjectRepository } from "../repositories/project/update-project/mongo-update-project";
import { UpdateProjectController } from "../controllers/project/update-project/update-project";
import { MongoDeleteProjectRepository } from "../repositories/project/delete-project/mongo-delete-project";
import { DeleteProjectController } from "../controllers/project/delete-project/delete-project";
const routes = Router();

routes.get("/projects", auth, async (req, res) => {
  const mongoGetProjectsRepository = new MongoGetProjectsRepository();
  const getProjectsController = new GetProjectsController(
    mongoGetProjectsRepository
  );
  const { body, statusCode } = await getProjectsController.handle();
  res.status(statusCode).send(body);
});

routes.post("/projects", auth, async (req, res) => {
  const mongoCreateSkillRepository = new MongoCreateProjectRepository();
  const createSkillController = new CreateProjectController(
    mongoCreateSkillRepository
  );
  const { body, statusCode } = await createSkillController.handle({
    body: req.body,
  });
  res.status(statusCode).send(body);
});

routes.patch("/projects/:id", auth, async (req, res) => {
  const mongoUpdateSkillRepository = new MongoUpdateProjectRepository();
  const updateSkillController = new UpdateProjectController(
    mongoUpdateSkillRepository
  );
  const { body, statusCode } = await updateSkillController.handle({
    body: req.body,
    params: req.params,
  });
  res.status(statusCode).send(body);
});

routes.delete("/projects/:id", auth, async (req, res) => {
  const mongoDeleteSkillRepository = new MongoDeleteProjectRepository();
  const deleteSkillController = new DeleteProjectController(
    mongoDeleteSkillRepository
  );
  const { body, statusCode } = await deleteSkillController.handle({
    params: req.params,
  });
  res.status(statusCode).send(body);
});

export default routes;
