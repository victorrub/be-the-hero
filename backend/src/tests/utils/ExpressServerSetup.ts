import { Express } from "express";
import { Connection } from "typeorm";

import { Startup } from "@loaders/Startup";

import { DatabaseSetup } from "./DatabaseSetup";

let connection: Connection;
const configuration = new Startup();

export async function ExpressServerSetup(): Promise<Express> {
  connection = await DatabaseSetup();
  const express = await configuration.ConfigureServices(connection);
  return express;
}

export async function CloseConnection(): Promise<void> {
  await connection.close();
}
