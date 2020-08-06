import { ServiceError } from "@errors/ServiceError";
import { Startup } from "@loaders/Startup";

class App {
  private readonly _configuration = new Startup();

  constructor() {
    this.Main();
  }

  private async Main(): Promise<void> {
    try {
      const express = await this._configuration.ConfigureServices();

      await this._configuration.CreateServer(express);
    } catch (ex) {
      console.log(ServiceError.ProcessError("Main"));
      console.error(ex);
    }
  }
}

export default new App();
