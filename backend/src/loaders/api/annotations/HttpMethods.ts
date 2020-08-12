import { SetHttpMethodAndSubRoute } from "@loaders/api/core/annotations/SetHttpMethodAndSubRoute";

import { RouteOptions } from "../core/annotations/RouteOptions";

export const HttpGet = (options?: RouteOptions): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, "get", options);
};

export const HttpPost = (options?: RouteOptions): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, "post", options);
};

export const HttpPut = (options?: RouteOptions): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, "put", options);
};

export const HttpDelete = (options?: RouteOptions): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, "delete", options);
};
