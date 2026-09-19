import fs from "node:fs";
import path from "node:path";

export function writeToFile(
  filename: string,
  data: unknown,
  func?: () => void,
) {
  const file = `${filename}.json`;
  const filepath = path.join(__dirname, "..", file);
  const payload = JSON.stringify(data, null, 2);

  fs.writeFile(filepath, payload, (error) => {
    if (!error) return func?.();
    console.error(error);
  });
}
