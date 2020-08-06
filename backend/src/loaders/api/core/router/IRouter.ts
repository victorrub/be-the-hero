import { Router } from "express";

import { IControllerBase } from "@loaders/app/core/IControllerBase";

export interface IRouter {
  ConfigureRoutes(controllers: Array<IControllerBase>): Promise<Router>;
}
