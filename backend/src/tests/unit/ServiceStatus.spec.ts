import { ServiceStatus } from "@models/ServiceStatus";

describe("Service Status Model", () => {
  it("should be able to create a Service Status object", () => {
    const dateTimeNow = new Date();

    const state = new ServiceStatus("api", "running", dateTimeNow);

    expect(state).toHaveProperty("service", "api");
    expect(state).toHaveProperty("status", "running");
    expect(state).toHaveProperty("checkAt", dateTimeNow);
  });
});
