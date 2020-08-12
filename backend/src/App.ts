import "reflect-metadata";

import { Startup } from "@loaders/Startup";
import { ServiceError } from "@models/errors/ServiceError";

class App {
  private readonly _configuration = new Startup();

  constructor() {
    this.Main();
  }

  private async Main(): Promise<void> {
    try {
      const connection = await this._configuration.ConnectDatabase();
      const express = await this._configuration.ConfigureServices(connection);
      const server = await this._configuration.CreateServer(express);
    } catch (ex) {
      console.log(ServiceError.ProcessError("Main"));
      console.error(ex);
    }
  }
}

export default new App();
