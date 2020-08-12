import NormalizePath from "@loaders/app/utils/NormalizePath";

describe("Utils => Normalize Path", () => {
  it("should obtain the full path to the src folder, defining the src folder as the root of the solution and becoming the basis for walking between the other folders", () => {
    const anyFolderPath = NormalizePath();

    expect(anyFolderPath).toMatch(/backend/);
    expect(anyFolderPath).toMatch(/src/);
  });

  it("should get the full path to controllers folder", () => {
    const controllersFolderPath = NormalizePath("controllers");

    expect(controllersFolderPath).toMatch(/backend/);
    expect(controllersFolderPath).toMatch(/src/);
    expect(controllersFolderPath).toMatch(/controllers/);
  });

  it("should get the full path to unit tests folder", () => {
    const unitTestsFolderPath = NormalizePath("tests/unit");

    expect(unitTestsFolderPath).toMatch(/backend/);
    expect(unitTestsFolderPath).toMatch(/src/);
    expect(unitTestsFolderPath).toMatch(/tests/);
    expect(unitTestsFolderPath).toMatch(/unit/);
  });

  it("should get the full path to solution folder", () => {
    const solutionFolderPath = NormalizePath("..");

    expect(solutionFolderPath).toMatch(/backend/);
  });
});
