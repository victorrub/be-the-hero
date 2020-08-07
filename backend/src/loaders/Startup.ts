import { Express } from "express";
import { Server } from "http";

import { ExpressServer } from "@loaders/api/ExpressServer";
import { ExpressRoutes } from "@loaders/api/routes/ExpressRoutes";
import { ControllersServiceCollection } from "@loaders/app/ControllersServiceCollection";

export class Startup {
  private readonly _port = process.env.PORT || 3333;

  public async ConfigureServices(): Promise<Express> {
    const controllers = await ControllersServiceCollection.AddControllers();
    const router = await ExpressRoutes.ConfigureRoutes(controllers);

    const expressServer = new ExpressServer(router);
    const { express } = expressServer;

    return express;
  }

  public CreateServer(express: Express, port = this._port): Promise<Server> {
    return new Promise((resolve) => {
      const server = express.listen(port, () =>
        console.log(`> Listening on port ${port}`)
      );

      resolve(server);
    });
  }
}
