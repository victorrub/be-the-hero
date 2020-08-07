export interface IRouteDefinition {
  path: string;

  requestMethod: "get" | "post" | "put" | "delete";

  methodName: string;
}
