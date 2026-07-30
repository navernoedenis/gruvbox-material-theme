import path from 'node:path';
import shart from 'sharp';

const filename = 'logo.png';
const filepath = path.join(__dirname, '..', '..', filename);

function buildLogo(pathToFile: string) {
  shart('./logo.svg').resize(500).png().toFile(pathToFile);
}

buildLogo(filepath);
