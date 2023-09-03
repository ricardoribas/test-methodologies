import { Maybe } from "./types";

export function isEmpty(str?: Maybe<string>): boolean {
  if (!str) {
    return true;
  }

  return str.trim().length === 0;
}
