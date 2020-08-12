import { Connection } from "typeorm";

import { Startup } from "@loaders/Startup";

const configuration = new Startup();

export async function DatabaseSetup(): Promise<Connection> {
  const connection = await configuration.ConnectDatabase();

  await connection.dropDatabase();
  await connection.runMigrations();

  return connection;
}

export async function CloseConnection(connection: Connection): Promise<void> {
  await connection.close();
  await connection.dropDatabase();
}
