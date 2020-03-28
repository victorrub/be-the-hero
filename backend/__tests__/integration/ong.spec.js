import request from "supertest";
import app from "../../src/app";
import connect from "../../src/database/connect";

describe("ONG", () => {
  beforeEach(async () => {
    await connect.migrate.rollback();
    await connect.migrate.latest();
  });

  afterAll(async () => {
    await connect.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const data = {
      name: "APAD",
      email: "contato@apad.org.br",
      whatsapp: "4700000000",
      city: "São Paulo",
      uf: "SP"
    };

    const { body } = await request(app)
      .post("/ongs")
      .send(data);

    expect(body).toHaveProperty("id");
    expect(body.id).toHaveLength(8);
  });
});
