import RouteForwardSlash from "@loaders/api/utils/RouteForwardSlash";

describe("Utils => Forward Slash", () => {
  it("should do not execute the RegExp test if send the default route", () => {
    const result = RouteForwardSlash("/");

    expect(result).toBe("/");
  });

  it("should return the slash for the default route if call the function with blank string on param", () => {
    const result = RouteForwardSlash("");

    expect(result).toBe("/");
  });

  it("should check if the string has the forward slash at the beginning, refuse and return correctly on the lower case", () => {
    const result = RouteForwardSlash("BatataFrita");

    expect(result).toBe("/batatafrita");
  });

  it("should check if the string has the forward slash at the beginning, accept and return the same string on the lower case", () => {
    const result = RouteForwardSlash("/Potato");

    expect(result).toBe("/potato");
  });
});
