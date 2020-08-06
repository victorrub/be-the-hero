import { Express } from "express";

import { ExpressServer } from "@loaders/api/ExpressServer";
import { ExpressRoutes } from "@loaders/api/routes/ExpressRoutes";
import { ControllersServiceCollection } from "@loaders/app/ControllersServiceCollection";

export class Startup {
  private _controllersServiceCollection = new ControllersServiceCollection();

  private _expressRoutes = new ExpressRoutes();

  public async ConfigureServices(): Promise<Express> {
    const controllers = await this._controllersServiceCollection.AddControllers();
    const router = await this._expressRoutes.ConfigureRoutes(controllers);

    const expressServer = new ExpressServer(router);
    const { express } = expressServer;

    return express;
  }

  public CreateServer(
    express: Express,
    port = process.env.PORT || 3333
  ): Promise<void> {
    return new Promise((resolve) => {
      express.listen(port, () => console.log(`> Listening on port ${port}`));

      resolve();
    });
  }
}
