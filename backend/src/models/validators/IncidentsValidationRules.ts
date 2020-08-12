import { celebrate, Segments, Joi } from "celebrate";
import { RequestHandler } from "express";

export class IncidentsValidationRules {
  public static ListIncidents(): RequestHandler {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    });
  }

  public static CreateIncident(): RequestHandler {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),

        description: Joi.string().required(),

        value: Joi.number().required(),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  }

  public static DeleteIncident(): RequestHandler {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required(),
      }),
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  }
}
