import connect from "../../database/connect";

class IncidentController {
  async list(request, response) {
    try {
      const { page = 1 } = request.query;

      const [countIncidents] = await connect("incidents").count();

      const incidents = await connect("incidents")
        .join("ongs", "ongs.id", "=", "incidents.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          "incidents.*",
          "ongs.name",
          "ongs.email",
          "ongs.whatsapp",
          "ongs.city",
          "ongs.uf"
        ]);

      response.header("X-Total-Count", countIncidents["count(*)"]);

      return response.json({ incidents });
    } catch (err) {
      return response.status(400).send();
    }
  }

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    try {
      const [id] = await connect("incidents").insert({
        title,
        description,
        value,
        ong_id
      });

      return response.json({ id });
    } catch (err) {
      return response.status(400).send();
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    try {
      const incident = await connect("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (incident.ong_id !== ong_id)
        return response.status(401).json({ error: "Operation not permitted." });

      await connect("incidents")
        .where("id", id)
        .delete();

      return response.status(204).send();
    } catch (err) {
      return response.status(400).send();
    }
  }
}

export default new IncidentController();
