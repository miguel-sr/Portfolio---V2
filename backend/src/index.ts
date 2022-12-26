import express from "express";
import { config } from "dotenv";
import routes from "./routes/routes";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.json({ type: "application/vnd.api+json" }));

  await MongoClient.connect();

  app.get("/api/v1", (req, res) => {
    res.status(200).send({
      success: true,
      message: "Welcome to API!",
      version: "1.0.0",
    });
  });

  app.use("/api/v1", routes);

  const port = process.env.PORT || 8089;

  app.listen(port, () => console.log(`==> Listening on port ${port}!`));
};

main();
