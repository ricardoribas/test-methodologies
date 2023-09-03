import { Maybe } from "./types";

export function isEmpty(str?: Maybe<string>): boolean {
  if (!str) {
    return true;
  }

  return str.trim().length === 0;
}

export function capitalize(value: string): string {
  return value.replace(/^\w/, (c) => c.toUpperCase());
}

// Credits: https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text
export function removeWhiteSpaces(value: string): string {
  return value.replace(/ /g, "");
}
