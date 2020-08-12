import GetDirectoryContent from "@loaders/app/utils/GetDirectoryContent";
import NormalizePath from "@loaders/app/utils/NormalizePath";

describe("Utils => Get Directory Content", () => {
  it("should obtain the main application file when analyzing the src folder", async () => {
    const srcFolderPath = NormalizePath();
    const files = await GetDirectoryContent(srcFolderPath);

    expect(files).toContain("App.ts");
  });
});
