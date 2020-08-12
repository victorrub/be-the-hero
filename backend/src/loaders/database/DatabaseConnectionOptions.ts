import { getConnectionOptions, ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export class DatabaseConnectionOptions {
  public static async Get(): Promise<ConnectionOptions> {
    const env = process.env.NODE_ENV;
    const connectionOptionsBase = await getConnectionOptions(env);

    return Object.assign(connectionOptionsBase, {
      name: "default",
      namingStrategy: new SnakeNamingStrategy(),
    });
  }
}
