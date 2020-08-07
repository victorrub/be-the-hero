import { ControllersServiceCollection } from "@loaders/app/ControllersServiceCollection";

describe("@loaders/app => Controllers Service Collection", () => {
  it("should import all controllers in the controller's folder", async () => {
    const controllers = await ControllersServiceCollection.AddControllers();

    expect(controllers[0]).toHaveProperty("name");
    expect(controllers[0]).toHaveProperty("type");
    expect(controllers[0]).toHaveProperty("pureClass");
    expect(controllers[0]).toHaveProperty("instantiatedClass");
  });
});
