import { IRouteDefinition } from "../router/IRouteDefinition";
import { RouteOptions } from "./RouteOptions";

export function SetHttpMethodAndSubRoute(
  target: any,
  propertyKey: string | symbol,
  requestMethod: "get" | "post" | "put" | "delete",
  options = {} as RouteOptions
): void {
  if (!Reflect.hasMetadata("routes", target.constructor))
    Reflect.defineMetadata("routes", [], target.constructor);

  const routes = Reflect.getMetadata("routes", target.constructor) as Array<
    IRouteDefinition
  >;

  if (typeof propertyKey === "symbol") return;

  const routeDefinition: IRouteDefinition = {
    requestMethod,
    path: options.path || "/",
    methodName: propertyKey,
    routeValidator: options.validator,
  };

  routes.push(routeDefinition);

  Reflect.defineMetadata("routes", routes, target.constructor);
}
