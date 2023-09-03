export interface ParametrizedTestCase<T, U> {
  input: T;
  output: U;
}

export function transformIntoParametrizedJest<T, U>(
  dataset?: ParametrizedTestCase<T, U>[]
): [T, U][] {
  if (!dataset) {
    return [];
  }

  return dataset.map((element) => [element.input, element.output]);
}
