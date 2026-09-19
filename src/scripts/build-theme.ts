import { createTheme, defaultThemeOptions, type ThemeOptions } from "../theme";
import { EXTENSION_NAME } from "../constants";
import { writeToFile } from "../utils/write-to-file";

function buildTheme(filename: string, options: ThemeOptions) {
  writeToFile(filename, createTheme(options));
}

buildTheme(EXTENSION_NAME, defaultThemeOptions);
