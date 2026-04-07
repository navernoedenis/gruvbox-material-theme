import { workspace } from 'vscode';
import { defaultThemeOptions } from '../../constants/main';
import {
  type CursorColor,
  type SelectionColor,
  type ThemeContrast,
  type ThemeOptions,
  type ThemePalette,
} from '../../types';

export function getThemeOptions(key: string): ThemeOptions {
  const config = workspace.getConfiguration(key);
  const contrast = config.get<ThemeContrast>('contrast');
  const cursor = config.get<CursorColor>('cursor');
  const palette = config.get<ThemePalette>('palette');
  const selection = config.get<SelectionColor>('selection');

  return {
    contrast: contrast ?? defaultThemeOptions.contrast,
    cursor: cursor ?? defaultThemeOptions.cursor,
    palette: palette ?? defaultThemeOptions.palette,
    selection: selection ?? defaultThemeOptions.selection,
  };
}

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrast === defaultThemeOptions.contrast &&
    options.cursor === defaultThemeOptions.cursor &&
    options.palette === defaultThemeOptions.palette &&
    options.selection === defaultThemeOptions.selection
  );
}
