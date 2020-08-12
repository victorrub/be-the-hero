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
              if (route.routeValidator)
                expressRouter[route.requestMethod](
                  prefix + route.path,
                  route.routeValidator,
                  async (req, res) =>
                    controller.instantiatedClass[route.methodName](req, res)
                );
              else
                expressRouter[route.requestMethod](
                  prefix + route.path,
                  async (req, res) =>
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
