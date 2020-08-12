import RemoveFileExtension from "@loaders/app/utils/RemoveFileExtension";

describe("Utils => Remove File Extension", () => {
  it("should remove Typescript file extension", () => {
    const filename = RemoveFileExtension("ControllerName.ts");

    expect(filename).toBe("ControllerName");
  });

  it("should remove Text file extension", () => {
    const filename = RemoveFileExtension("notepad.txt");

    expect(filename).toBe("notepad");
  });

  it("should remove JSON file extension", () => {
    const filename = RemoveFileExtension("data.json");

    expect(filename).toBe("data");
  });

  it("should remove unknown file extension", () => {
    const filename = RemoveFileExtension("file.potato");

    expect(filename).toBe("file");
  });
});
