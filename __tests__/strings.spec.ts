import { isEmpty } from "../src/strings";

describe("String Helpers", () => {
  it("Should be an empty string", () => {
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it("Should be an empty string on white spaces", () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty("    ")).toBeTruthy();
    expect(isEmpty("\n\t\n")).toBeTruthy();
  });

  it("Should no be an empty string", () => {
    expect(isEmpty("not-empty")).toBeFalsy();
  });
});
