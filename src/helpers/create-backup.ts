import fs from 'node:fs';
import path from 'node:path';

const filename = 'backup.mock';
const filepath = path.join(__dirname, '..', filename);

export function createBackup() {
  fs.writeFileSync(filepath, '');
}

export function checkIsBackupExists() {
  return fs.existsSync(filepath);
}
