import { capitalize, removeWhiteSpaces } from "./strings";

const TRANSFORMERS: Array<(str: string) => string> = [
  capitalize,
  removeWhiteSpaces,
];

export function transform(str: string): string {
  return TRANSFORMERS.reduce((acc, t) => t(acc), str);
}
