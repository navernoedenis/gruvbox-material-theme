import { createTheme, BASE_THEME_OPTIONS } from "../theme";
import { type BaseThemeOptions } from "../theme";

import { EXTENSION_NAME } from "../app.constants";
import { writeToFile } from "../utils/write-to-file";

function buildTheme(filename: string, options: BaseThemeOptions) {
  writeToFile(filename, createTheme(options));
}

buildTheme(EXTENSION_NAME, BASE_THEME_OPTIONS);
