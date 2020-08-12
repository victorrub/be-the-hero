import { HealthCheckService } from "@services/HealthCheckService";

describe("Health Check Service", () => {
  it("should return an object with the name and status of application", () => {
    const healthService = new HealthCheckService();

    const state = healthService.Check();

    expect(state).toHaveProperty("service");
    expect(state).toHaveProperty("status");
    expect(state).toHaveProperty("checkAt");
  });
});
