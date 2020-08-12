import { Express } from "express";
import { Server } from "http";
import { createConnection, Connection } from "typeorm";

import { ExpressServer } from "@loaders/api/ExpressServer";
import { ExpressRoutes } from "@loaders/api/routes/ExpressRoutes";
import { ControllersServiceCollection } from "@loaders/app/ControllersServiceCollection";
import { DatabaseConnectionOptions } from "@loaders/database/DatabaseConnectionOptions";

export class Startup {
  private readonly _port = process.env.PORT || 3333;

  public async ConfigureServices(dbConnection: Connection): Promise<Express> {
    if (!dbConnection) throw new Error(`Database connection required`);

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

  public async ConnectDatabase(): Promise<Connection> {
    const connectionOptions = await DatabaseConnectionOptions.Get();
    const connection = createConnection(connectionOptions);

    return connection;
  }
}
