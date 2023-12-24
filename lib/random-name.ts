import type { Config } from "unique-names-generator";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";

const customConfig: Config = {
  dictionaries: [adjectives, colors, animals],
  separator: " ",
  length: 2,
  style: "capital",
};

export function generateRandomName() {
  return uniqueNamesGenerator(customConfig);
}
