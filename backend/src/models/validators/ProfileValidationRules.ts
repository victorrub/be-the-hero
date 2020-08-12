import { celebrate, Segments, Joi } from "celebrate";
import { RequestHandler } from "express";

export class ProfileValidationRules {
  public static GetOngIncidents(): RequestHandler {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    });
  }
}
