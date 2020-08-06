import { IRouteDefinition } from "../router/IRouteDefinition";

export function SetHttpMethodAndSubRoute(
  target: any,
  propertyKey: string | symbol,
  path: string,
  requestMethod: "get" | "post" | "put" | "delete"
): void {
  if (!Reflect.hasMetadata("routes", target.constructor))
    Reflect.defineMetadata("routes", [], target.constructor);

  const routes = Reflect.getMetadata("routes", target.constructor) as Array<
    IRouteDefinition
  >;

  if (typeof propertyKey === "symbol") return;

  const routeDefinition: IRouteDefinition = {
    requestMethod,
    path,
    methodName: propertyKey,
  };

  routes.push(routeDefinition);

  Reflect.defineMetadata("routes", routes, target.constructor);
}
