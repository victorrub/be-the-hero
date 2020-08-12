import { getRepository } from "typeorm";

import { Incidents } from "@models/Incidents";

import { OngsService } from "./OngsService";

export class IncidentsService {
  private readonly _incidentsRepository = getRepository(Incidents);

  private readonly _ongsService = new OngsService();

  public async CountIncidents(): Promise<string> {
    const countIncidents = await this._incidentsRepository.count();
    return countIncidents.toString();
  }

  public async ListIncidents(page = 1): Promise<Array<Incidents>> {
    const incidents = await this._incidentsRepository.find({
      take: 5,
      skip: (page - 1) * 5,
      order: { createdAt: "ASC" },
    });

    return incidents;
  }

  public async CreateIncident(requestData: any): Promise<Incidents> {
    const ong = await this._ongsService.FindOng(requestData.ongId);

    const incident = new Incidents();
    incident.title = requestData.title;
    incident.description = requestData.description;
    incident.value = requestData.value;
    incident.ong = ong;

    const incidentCreated = await this._incidentsRepository.save(incident);

    return incidentCreated;
  }

  public async DeleteIncident(requestData: any): Promise<void> {
    await this._ongsService.FindOng(requestData.ongId);

    const incident = await this._incidentsRepository.findOne({
      where: { id: requestData.incidentId },
    });

    if (!incident)
      throw {
        name: "NotFound",
        message: "No Incident found with this ID",
      };

    await this._incidentsRepository.remove(incident);
  }
}
