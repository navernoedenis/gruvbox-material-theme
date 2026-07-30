import { defaultThemeOptions } from '../../constants';
import {
  type CursorColor,
  type SelectionColor,
  type Separators,
  type ThemeContrast,
  type ThemeOptions,
  type ThemePalette,
} from '../../types';

type WorkspaceConfig = {
  get: <T>(key: string) => T | undefined;
};

export function getThemeOptions(config: WorkspaceConfig): ThemeOptions {
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
