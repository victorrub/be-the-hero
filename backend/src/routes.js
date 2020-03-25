import express from "express";

import SessionController from "./app/controllers/SessionController";
import OngController from "./app/controllers/OngController";
import IncidentController from "./app/controllers/IncidentController";
import ProfileController from "./app/controllers/ProfileController";

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.list);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.list);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.list);

export default routes;
