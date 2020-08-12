import { getRepository } from "typeorm";

import { Ongs } from "@models/Ongs";

export class SessionService {
  private readonly _ongsRepository = getRepository(Ongs);

  public async CreateSession(userId: string): Promise<Ongs> {
    const ong = await this._ongsRepository.findOne({
      where: { userId },
      select: ["name"],
    });

    if (!ong)
      throw {
        name: "NotFound",
        message: "No ONG found with this ID",
      };

    return ong;
  }
}
