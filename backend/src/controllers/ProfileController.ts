import { Request, Response } from "express";

import { ApiController, HttpGet } from "@annotations/express";
import { ProfileValidationRules } from "@models/validators/ProfileValidationRules";
import { ProfileService } from "@services/ProfileService";

@ApiController()
export class ProfileController {
  private readonly _profileService = new ProfileService();

  @HttpGet({ validator: ProfileValidationRules.GetOngIncidents() })
  public async GetOngIncidents(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const ongId = request.headers.authorization;

      const incidents = await this._profileService.GetOngIncidents(ongId);
      return response.json(incidents);
    } catch (ex) {
      return response.status(400).send();
    }
  }
}
