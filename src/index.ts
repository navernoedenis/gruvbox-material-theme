import { commands, window, workspace } from "vscode";
import { createBackup, checkIsBackupExists } from "./utils/create-backup";
import { writeToFile } from "./utils/write-to-file";

import { EXTENSION_NAME } from "./constants";
import {
  checkIsDefaultThemeOptions,
  createTheme,
  getThemeOptions,
  type ThemeOptions,
} from "./theme";

export function activate() {
  const config = workspace.getConfiguration(EXTENSION_NAME);
  const options = getThemeOptions(config);
  const isBackupExists = checkIsBackupExists();

  if (!isBackupExists && !checkIsDefaultThemeOptions(options)) {
    updateTheme(EXTENSION_NAME, options);
    createBackup();
    reloadEditor();
  }

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(EXTENSION_NAME)) {
      const updatedConfig = workspace.getConfiguration(EXTENSION_NAME);
      const updatedOptions = getThemeOptions(updatedConfig);

      updateTheme(EXTENSION_NAME, updatedOptions);
      const message = "Theme has been updated!";
      const action = "Reload editor";

      window
        .showInformationMessage(message, action)
        .then((item) => item === action && reloadEditor());
    }
  });
}

function updateTheme(filename: string, options: ThemeOptions) {
  writeToFile(filename, createTheme(options));
}

function reloadEditor() {
  commands.executeCommand("workbench.action.reloadWindow");
}
