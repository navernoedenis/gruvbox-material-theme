import { commands, window, workspace } from "vscode";
import { createBackup, checkIsBackupExists } from "./utils/create-backup";
import { writeToFile } from "./utils/write-to-file";

import { BASE_THEME_OPTIONS, getBaseThemeOptions } from "./theme";
import { createTheme, checkIsDefaultThemeOptions } from "./theme";
import { type BaseThemeOptions } from "./theme";

import { EXTENSION_NAME } from "./app.constants";

export function activate() {
  const config = workspace.getConfiguration(EXTENSION_NAME);
  const options = getBaseThemeOptions(config, BASE_THEME_OPTIONS);
  const isBackupExists = checkIsBackupExists();
  const isDefaultThemeOptions = checkIsDefaultThemeOptions(
    options,
    BASE_THEME_OPTIONS,
  );

  if (!isBackupExists && !isDefaultThemeOptions) {
    updateTheme(EXTENSION_NAME, options);
    createBackup();
    reloadEditor();
  }

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(EXTENSION_NAME)) {
      const updatedConfig = workspace.getConfiguration(EXTENSION_NAME);
      const updatedOptions = getBaseThemeOptions(
        updatedConfig,
        BASE_THEME_OPTIONS,
      );

      updateTheme(EXTENSION_NAME, updatedOptions);
      const message = "Theme has been updated!";
      const action = "Reload Editor";

      window
        .showInformationMessage(message, action)
        .then((item) => item === action && reloadEditor());
    }
  });
}

function updateTheme(filename: string, options: BaseThemeOptions) {
  writeToFile(filename, createTheme(options));
}

function reloadEditor() {
  commands.executeCommand("workbench.action.reloadWindow");
}
