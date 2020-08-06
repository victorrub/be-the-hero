import { ServiceStatus } from "@models/ServiceStatus";

export class HealthCheckService {
  public Check(): ServiceStatus {
    const state = new ServiceStatus(
      process.env.npm_package_name || "api",
      "running",
      new Date()
    );

    return state;
  }
}
