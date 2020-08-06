import { RouteForwardSlash } from "@loaders/api/utils/RouteForwardSlash";

export const ApiController = (prefix = ""): ClassDecorator => {
  return (target): void => {
    const controllerName = target.name.split("Controller").join("");

    const routePrefix = prefix === "" ? `/${controllerName}` : prefix;

    Reflect.defineMetadata("prefix", RouteForwardSlash(routePrefix), target);

    if (!Reflect.hasMetadata("controller-type", target))
      Reflect.defineMetadata("controller-type", "api", target);

    if (!Reflect.hasMetadata("routes", target))
      Reflect.defineMetadata("routes", [], target);
  };
};
