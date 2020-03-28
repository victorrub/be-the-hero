import express from "express";
import { celebrate, Segments, Joi } from "celebrate";

import SessionController from "./app/controllers/SessionController";
import OngController from "./app/controllers/OngController";
import IncidentController from "./app/controllers/IncidentController";
import ProfileController from "./app/controllers/ProfileController";

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.list);

routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.list
);

routes.post("/incidents", IncidentController.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.delete
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.list
);

export default routes;
