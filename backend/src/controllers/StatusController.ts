import { Request, Response } from "express";

import { ApiController, HttpGet } from "@annotations/express";
import { HealthCheckService } from "@services/HealthCheckService";

@ApiController("/")
export class StatusController {
  private _health = new HealthCheckService();

  @HttpGet()
  public Check(request: Request, response: Response): Response {
    const state = this._health.Check();
    return response.json(state);
  }
}
