import { transformIntoParametrizedJest } from "../src/tests";

const USE_CASES: Array<[string, string]> = [["hello world", "Helloworld"]];

export default transformIntoParametrizedJest<string, string>(
  USE_CASES.map(([input, output]) => ({
    input,
    output,
  }))
);
