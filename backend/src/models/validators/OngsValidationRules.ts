import { celebrate, Segments, Joi } from "celebrate";
import { RequestHandler } from "express";

export class OngsValidationRules {
  public static CreateOngs(): RequestHandler {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),

        email: Joi.string().required().email(),

        whatsapp: Joi.string().required().min(10).max(11),

        city: Joi.string().required(),

        uf: Joi.string().required().length(2),
      }),
    });
  }
}
