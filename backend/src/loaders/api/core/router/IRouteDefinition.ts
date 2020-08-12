import { RequestHandler } from "express";

export interface IRouteDefinition {
  path: string;

  requestMethod: "get" | "post" | "put" | "delete";

  methodName: string;

  routeValidator?: RequestHandler;
}
