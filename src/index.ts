import express from "express";
import swagger from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerConfig from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/desafio_api-docs", swagger.serve, swagger.setup(swaggerConfig));

app.use("/users", usersRoutes);

export { app };
