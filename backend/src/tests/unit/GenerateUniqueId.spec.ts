import GenerateUniqueId from "@utils/GenerateUniqueId";

describe("Utils => Generate Unique ID", () => {
  it("should generate unique id with 8 in length", () => {
    const id = GenerateUniqueId();

    expect(id).toHaveLength(8);
  });
});
