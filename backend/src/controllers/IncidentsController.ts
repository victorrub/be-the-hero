import { Request, Response } from "express";

import {
  ApiController,
  HttpGet,
  HttpPost,
  HttpDelete,
} from "@annotations/express";
import { IncidentsValidationRules } from "@models/validators/IncidentsValidationRules";
import { IncidentsService } from "@services/IncidentsService";

@ApiController()
export class IncidentsController {
  private readonly _incidentsService = new IncidentsService();

  @HttpGet({ validator: IncidentsValidationRules.ListIncidents() })
  public async ListIncidents(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const { page = 1 } = request.query;

      const countIncidents = await this._incidentsService.CountIncidents();
      const incidents = await this._incidentsService.ListIncidents(
        Number(page)
      );

      response.header("X-Total-Count", countIncidents);
      return response.json(incidents);
    } catch (ex) {
      return response.status(400).send();
    }
  }

  @HttpPost({ validator: IncidentsValidationRules.CreateIncident() })
  public async CreateIncident(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const requestData = request.body;
      requestData.ongId = request.headers.authorization;

      const incident = await this._incidentsService.CreateIncident(requestData);
      return response.json(incident);
    } catch (ex) {
      if (ex.name === "NotFound")
        return response.status(404).json({ message: ex.message });

      return response.status(400).send();
    }
  }

  @HttpDelete({
    path: "/:id",
    validator: IncidentsValidationRules.DeleteIncident(),
  })
  public async DeleteIncident(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const requestData = {
        incidentId: request.params.id,
        ongId: request.headers.authorization,
      };

      await this._incidentsService.DeleteIncident(requestData);

      return response.status(204).send();
    } catch (ex) {
      if (ex.name === "NotFound")
        return response.status(404).json({ message: ex.message });

      return response.status(400).send();
    }
  }
}
