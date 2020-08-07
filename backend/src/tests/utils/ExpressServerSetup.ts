import { Express } from "express";

import { Startup } from "@loaders/Startup";

export async function ExpressServerSetup(): Promise<Express> {
  const configuration = new Startup();
  const express = await configuration.ConfigureServices();
  return express;
}
