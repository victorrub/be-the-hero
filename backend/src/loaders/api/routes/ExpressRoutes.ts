import { Router } from "express";

import { IRouteDefinition } from "@loaders/api/core/router/IRouteDefinition";
import { IControllerBase } from "@loaders/app/core/IControllerBase";

export class ExpressRoutes {
  public static ConfigureRoutes(
    controllers: Array<IControllerBase>
  ): Promise<Router> {
    return new Promise((resolve, reject) => {
      try {
        const expressRouter = Router();

        controllers
          .filter((controller) => controller.type === "api")
          .forEach((controller) => {
            const prefix = Reflect.getMetadata("prefix", controller.pureClass);

            const routes = Reflect.getMetadata(
              "routes",
              controller.pureClass
            ) as Array<IRouteDefinition>;

            routes.forEach((route) => {
              expressRouter[route.requestMethod](
                prefix + route.path,
                (req, res) =>
                  controller.instantiatedClass[route.methodName](req, res)
              );
            });
          });

        resolve(expressRouter);
      } catch (ex) {
        reject(
          new Error(
            `An error occurred while express routes were being configured. \n\n Exception: ${ex} \n`
          )
        );
      }
    });
  }
}
