import { transform } from "../src/string-transformer";
import ValuesDataset from "./values-dataset";

describe("String Transformer", () => {
  it.each(ValuesDataset)(`transform(%s)`, (input, output) => {
    expect(transform(input)).toStrictEqual(output);
  });
});
