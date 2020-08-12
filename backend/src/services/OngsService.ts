import { getRepository } from "typeorm";

import { Ongs } from "@models/Ongs";
import GenerateUniqueId from "@utils/GenerateUniqueId";

export class OngsService {
  private readonly _ongsRepository = getRepository(Ongs);

  public async ListOngs(): Promise<Array<Ongs>> {
    const ongs = await this._ongsRepository.find();
    return ongs;
  }

  public async FindOng(userId: string): Promise<Ongs> {
    const ong = await this._ongsRepository.findOne({
      where: { userId },
    });

    if (!ong)
      throw {
        name: "NotFound",
        message: "No ONG found with this ID",
      };

    return ong;
  }

  public async CreateOng(requestData: any): Promise<Ongs> {
    const ong = new Ongs();
    ong.userId = GenerateUniqueId();
    ong.name = requestData.name;
    ong.email = requestData.email;
    ong.whatsapp = requestData.whatsapp;
    ong.city = requestData.city;
    ong.uf = requestData.uf;

    const ongCreated = await this._ongsRepository.save(ong);

    return ongCreated;
  }
}
