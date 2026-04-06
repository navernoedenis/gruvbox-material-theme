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
  const isDefaultThemeOptions = checkIsDefaultThemeOptions(
    getThemeOptions(extensionName),
  );

  if (!isBackupExists && !isDefaultThemeOptions) {
    const themeOptions = getThemeOptions(extensionName);
    const theme = createTheme(themeOptions);
    writeThemeToFile(theme, () => {
      createBackup();
      reloadWindow();
    });
  }

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(extensionName)) {
      const themeOptions = getThemeOptions(extensionName);
      const theme = createTheme(themeOptions);

      writeThemeToFile(theme, () => {
        const message = 'Gruvbox Material Theme has been updated';
        const reloadAction = 'Reload theme';

        window
          .showInformationMessage(message, reloadAction)
          .then((action) => action === reloadAction && reloadWindow());
      });
    }
  });
}

export function deactivate() {}

function reloadWindow() {
  commands.executeCommand('workbench.action.reloadWindow');
}
