import connect from "../../database/connect";
import crypto from "crypto";

class OngController {
  async list(request, response) {
    try {
      const ongs = await connect("ongs").select("*");
      return response.json({ ongs });
    } catch (err) {
      return response.status(400).send();
    }
  }

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");

    try {
      await connect("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return response.json({ id });
    } catch (err) {
      return response.status(400).json();
    }
  }
}

export default new OngController();
