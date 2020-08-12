import { getRepository } from "typeorm";

import { Incidents } from "@models/Incidents";

import { OngsService } from "./OngsService";

export class ProfileService {
  private readonly _incidentsRepository = getRepository(Incidents);

  private readonly _ongsServices = new OngsService();

  public async GetOngIncidents(ongId = ""): Promise<Array<Incidents>> {
    const ong = await this._ongsServices.FindOng(ongId);

    const incidents = await this._incidentsRepository.find({
      where: { ong },
      order: { createdAt: "ASC" },
    });

    return incidents;
  }
}
