import dotenv from "dotenv";

export class Environment {
  public static SetEnv(): any {
    dotenv.config({
      path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
    });

    return dotenv;
  }
}
