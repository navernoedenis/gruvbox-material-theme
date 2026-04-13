import { commands, window, workspace } from 'vscode';
import { createBackup, checkIsBackupExists } from './helpers/create-backup';
import { writeThemeToFile } from './helpers/write-theme-to-file';
import { createTheme } from './helpers/theme/create-theme';
import {
  getThemeOptions,
  checkIsDefaultThemeOptions,
} from './helpers/theme/get-theme-options';

import { extensionName } from './constants/main';

export function activate() {
  const isBackupExists = checkIsBackupExists();
  const isDefaultThemeOptions = checkIsDefaultThemeOptions(getThemeOptions());

  if (!isBackupExists && !isDefaultThemeOptions) {
    updateTheme(() => (createBackup(), reloadWindow()));
  }

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(extensionName)) {
      updateTheme(() => {
        const message = 'Theme has been updated';
        const reloadAction = 'Reload theme';

        window
          .showInformationMessage(message, reloadAction)
          .then((action) => action === reloadAction && reloadWindow());
      });
    }
  });
}

function updateTheme(func?: () => void) {
  const options = getThemeOptions();
  const theme = createTheme(options);
  writeThemeToFile(theme, func);
}

function reloadWindow() {
  commands.executeCommand('workbench.action.reloadWindow');
}
