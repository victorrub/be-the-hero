import { SetHttpMethodAndSubRoute } from "@loaders/api/core/annotations/SetHttpMethodAndSubRoute";

export const HttpGet = (path = "/"): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, path, "get");
};

export const HttpPost = (path = "/"): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, path, "post");
};

export const HttpPut = (path = "/"): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, path, "put");
};

export const HttpDelete = (path = "/"): MethodDecorator => {
  return (target, propertyKey: string | symbol): void =>
    SetHttpMethodAndSubRoute(target, propertyKey, path, "delete");
};
