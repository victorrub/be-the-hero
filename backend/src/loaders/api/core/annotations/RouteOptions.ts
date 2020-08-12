import { RequestHandler } from "express";

export abstract class RouteOptions {
  public path?: string;

  public validator?: RequestHandler;
}
