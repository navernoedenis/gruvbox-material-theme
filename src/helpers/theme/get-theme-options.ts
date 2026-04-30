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
  const separators = config.get<Separators>('separators');

  return {
    contrast: contrast ?? defaultThemeOptions.contrast,
    cursor: cursor ?? defaultThemeOptions.cursor,
    palette: palette ?? defaultThemeOptions.palette,
    selection: selection ?? defaultThemeOptions.selection,
    separators: separators ?? defaultThemeOptions.separators,
  };
}

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrast === defaultThemeOptions.contrast &&
    options.cursor === defaultThemeOptions.cursor &&
    options.palette === defaultThemeOptions.palette &&
    options.selection === defaultThemeOptions.selection &&
    options.separators === defaultThemeOptions.separators
  );
}
