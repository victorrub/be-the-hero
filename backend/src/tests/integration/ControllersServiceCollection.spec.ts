import { Connection } from "typeorm";

import { ControllersServiceCollection } from "@loaders/app/ControllersServiceCollection";

import { DatabaseSetup, CloseConnection } from "../utils/DatabaseSetup";

describe("@loaders/app => Controllers Service Collection", () => {
  let connection: Connection;

  beforeAll(async () => {
    connection = await DatabaseSetup();
  });

  afterAll(async () => {
    await CloseConnection(connection);
  });

  it("should import all controllers in the controller's folder", async () => {
    const controllers = await ControllersServiceCollection.AddControllers();

    expect(controllers[0]).toHaveProperty("name");
    expect(controllers[0]).toHaveProperty("type");
    expect(controllers[0]).toHaveProperty("pureClass");
    expect(controllers[0]).toHaveProperty("instantiatedClass");
  });
});
