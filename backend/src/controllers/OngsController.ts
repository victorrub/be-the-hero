import { Request, Response } from "express";

import { ApiController, HttpGet, HttpPost } from "@annotations/express";
import { OngsValidationRules } from "@models/validators/OngsValidationRules";
import { OngsService } from "@services/OngsService";

@ApiController()
export class OngsController {
  private readonly _ongsService = new OngsService();

  @HttpGet()
  public async ListOngs(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const ongs = await this._ongsService.ListOngs();
      return response.json(ongs);
    } catch (ex) {
      return response.status(400).send();
    }
  }

  @HttpPost({ validator: OngsValidationRules.CreateOngs() })
  public async CreateOng(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const requestData = request.body;

      const ong = await this._ongsService.CreateOng(requestData);
      return response.json(ong);
    } catch (ex) {
      return response.status(400).send();
    }
  }
}
