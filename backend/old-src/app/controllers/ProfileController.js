import connect from "../../database/connect";

class ProfileController {
  async list(request, response) {
    try {
      const ong_id = request.headers.authorization;

      const incidents = await connect("incidents")
        .where("ong_id", ong_id)
        .select("*");

      return response.json(incidents);
    } catch (err) {
      return response.status(400).send();
    }
  }
}

export default new ProfileController();
