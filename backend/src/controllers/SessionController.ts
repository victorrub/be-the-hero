import { Request, Response } from "express";

import { ApiController, HttpPost } from "@annotations/express";
import { SessionValidationRule } from "@models/validators/SessionValidationRule";
import { SessionService } from "@services/SessionService";

@ApiController()
export class SessionController {
  private readonly _sessionService = new SessionService();

  @HttpPost({ validator: SessionValidationRule.CreateSession() })
  public async CreateSession(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { id } = request.body;

      const ong = await this._sessionService.CreateSession(id);
      return response.json(ong);
    } catch (ex) {
      if (ex.name === "NotFound")
        return response.status(404).json({ message: ex.message });

      return response.status(400).send();
    }
  }
}
