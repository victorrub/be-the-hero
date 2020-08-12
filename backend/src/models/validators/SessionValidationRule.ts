import { celebrate, Segments, Joi } from "celebrate";
import { RequestHandler } from "express";

export class SessionValidationRule {
  public static CreateSession(): RequestHandler {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      }),
    });
  }
}
