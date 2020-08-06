import { Router } from "express";

import { IRouteDefinition } from "@loaders/api/core/router/IRouteDefinition";
import { IRouter } from "@loaders/api/core/router/IRouter";
import { IControllerBase } from "@loaders/app/core/IControllerBase";

export class ExpressRoutes implements IRouter {
  private _router = Router();

  public ConfigureRoutes(controllers: Array<IControllerBase>): Promise<Router> {
    return new Promise((resolve, reject) => {
      try {
        controllers
          .filter((controller) => controller.type === "api")
          .forEach((controller) => {
            const prefix = Reflect.getMetadata("prefix", controller.pureClass);

            const routes: Array<IRouteDefinition> = Reflect.getMetadata(
              "routes",
              controller.pureClass
            );

            routes.forEach((route) => {
              this._router[route.requestMethod](
                prefix + route.path,
                (req, res) =>
                  controller.instantiatedClass[route.methodName](req, res)
              );
            });
          });

        resolve(this._router);
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
