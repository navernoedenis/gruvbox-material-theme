import { type ThemeOptions } from '../types';
import { createTheme } from '../helpers/theme';
import { writeThemeToFile } from '../helpers/write-theme-to-file';
import { defaultThemeOptions } from '../constants';

function buildTheme(options: ThemeOptions) {
  writeThemeToFile(createTheme(options));
}

buildTheme(defaultThemeOptions);
