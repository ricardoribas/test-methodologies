import { sum } from "../src/math";

describe("Math Helpers", () => {
  it("Should sum values", () => {
    expect(sum(1, 2)).toStrictEqual(3);
  });
});
