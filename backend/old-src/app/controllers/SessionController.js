import connect from "../../database/connect";

class SessionController {
  async create(request, response) {
    try {
      const { id } = request.body;

      const ong = await connect("ongs")
        .where("id", id)
        .select("name")
        .first();

      if (!ong)
        return response
          .status(400)
          .json({ error: "No ONG found with this ID" });

      return response.json(ong);
    } catch (err) {
      return response.status(400).send();
    }
  }
}

export default new SessionController();
