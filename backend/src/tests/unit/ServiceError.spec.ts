import { ServiceError } from "@errors/ServiceError";

describe("Errors => Service Error", () => {
  it("should receive the friendly error message to be displayed indicating which method triggered the error", () => {
    const errorMessage = ServiceError.ProcessError("Test");

    expect(errorMessage).toBe(
      "\n > [Test] An error occurred while processing your request."
    );
  });
});
