import fs from 'node:fs';
import path from 'node:path';
import { extensionName } from '../constants/main';
import { type Theme } from '../types';

export function writeThemeToFile(theme: Theme, func?: () => void) {
  const filename = `${extensionName}.json`;
  const filepath = path.join(__dirname, '..', filename);
  const payload = JSON.stringify(theme, null, 2);

  fs.writeFile(filepath, payload, (error) => {
    if (!error) return func?.();
    console.error(error);
  });
}
