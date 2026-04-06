import { createTheme } from '../helpers/theme/create-theme';
import { writeThemeToFile } from '../helpers/write-theme-to-file';
import { defaultThemeOptions } from '../constants/main';

function buildTheme() {
  writeThemeToFile(createTheme(defaultThemeOptions));
}

buildTheme();
