import { workspace } from 'vscode';
import { defaultThemeOptions, extensionName } from '../../constants/main';
import {
  type CursorColor,
  type SelectionColor,
  type Separators,
  type ThemeContrast,
  type ThemeOptions,
  type ThemePalette,
} from '../../types';

export function getThemeOptions(): ThemeOptions {
  const config = workspace.getConfiguration(extensionName);

  const contrast = config.get<ThemeContrast>('contrast');
  const cursor = config.get<CursorColor>('cursor');
  const palette = config.get<ThemePalette>('palette');
  const selection = config.get<SelectionColor>('selection');
  const enableSparators = config.get<Separators>('separators');

  return {
    contrast: contrast ?? defaultThemeOptions.contrast,
    cursor: cursor ?? defaultThemeOptions.cursor,
    enableSparators: enableSparators ?? defaultThemeOptions.enableSparators,
    palette: palette ?? defaultThemeOptions.palette,
    selection: selection ?? defaultThemeOptions.selection,
  };
}

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrast === defaultThemeOptions.contrast &&
    options.cursor === defaultThemeOptions.cursor &&
    options.enableSparators === defaultThemeOptions.enableSparators &&
    options.palette === defaultThemeOptions.palette &&
    options.selection === defaultThemeOptions.selection
  );
}
