import { getConnectionOptions, ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export class DatabaseConnectionOptions {
  public static async Get(): Promise<ConnectionOptions> {
    const connectionOptionsBase = await getConnectionOptions();

    return Object.assign(connectionOptionsBase, {
      namingStrategy: new SnakeNamingStrategy(),
    });
  }
}
