import ControllerFilesFilter from "@loaders/app/utils/ControllerFilesFilter";

describe("Utils => ControllerFilesFilter", () => {
  it("should permit controllers with controller pattern and type TS to be added", () => {
    const controllerFilename = "PotatoController.ts";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeTruthy();
  });

  it("should permit controllers with controller pattern and type JS to be added", () => {
    const controllerFilename = "PotatoController.js";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeTruthy();
  });

  it("should deny controllers without controller pattern", () => {
    const controllerFilename = "Potato.ts";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeFalsy();
  });

  it("should deny controllers that incorrectly implement the controller pattern", () => {
    const controllerFilename = "PotatoControllers.ts";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeFalsy();
  });

  it("should permit controllers that implement controller pattern to be added", () => {
    const controllerFilename = "FriesPotatoController.js";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeTruthy();
  });

  it("should deny controllers with another type", () => {
    const controllerFilename = "FriesPotatoController.cs";
    const testControllerName = ControllerFilesFilter(controllerFilename);

    expect(testControllerName).toBeFalsy();
  });
});
