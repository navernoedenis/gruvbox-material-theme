import { commands, window, workspace } from 'vscode';
import { createBackup, checkIsBackupExists } from './helpers/create-backup';
import { writeThemeToFile } from './helpers/write-theme-to-file';
import {
  checkIsDefaultThemeOptions,
  createTheme,
  getThemeOptions,
} from './helpers/theme';

import { extensionName } from './constants';
import { ThemeOptions } from './types';

export function activate() {
  const config = workspace.getConfiguration(extensionName);
  const options = getThemeOptions(config);
  const isBackupExists = checkIsBackupExists();
  const isDefaultThemeOptions = checkIsDefaultThemeOptions(options);

  if (!isBackupExists && !isDefaultThemeOptions) {
    updateTheme(options, () => (createBackup(), reloadWindow()));
  }

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(extensionName)) {
      const updatedConfig = workspace.getConfiguration(extensionName);
      const updatedOptions = getThemeOptions(updatedConfig);

      updateTheme(updatedOptions, () => {
        const message = 'Theme has been updated';
        const reloadAction = 'Reload theme';

        window
          .showInformationMessage(message, reloadAction)
          .then((action) => action === reloadAction && reloadWindow());
      });
    }
  });
}

function updateTheme(options: ThemeOptions, func?: () => void) {
  writeThemeToFile(createTheme(options), func);
}

function reloadWindow() {
  commands.executeCommand('workbench.action.reloadWindow');
}
