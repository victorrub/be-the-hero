import { Controllers } from "@loaders/app/core/GetAllControllers";
import GetDirectoryContent from "@loaders/app/utils/GetDirectoryContent";
import NormalizePath from "@loaders/app/utils/NormalizePath";

describe("@loaders/core => Controllers", () => {
  it("should import and create a controller base object from all controllers in the controller's folder", async () => {
    const normalizedPath = NormalizePath("controllers");
    const filesOnControllersFolder = await GetDirectoryContent(normalizedPath);

    const controllers = await Controllers.GetAll(filesOnControllersFolder);

    expect(controllers[0]).toHaveProperty("name");
    expect(controllers[0]).toHaveProperty("type");
    expect(controllers[0]).toHaveProperty("pureClass");
    expect(controllers[0]).toHaveProperty("instantiatedClass");
  });
});
