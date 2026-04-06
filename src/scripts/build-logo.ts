import path from 'node:path';
import shart from 'sharp';

const size = 500;
const filename = 'logo.png';
const filepath = path.join(__dirname, '..', '..', filename);

function buildLogo() {
  shart('./logo.svg').resize(size).png().toFile(filepath);
}

buildLogo();
