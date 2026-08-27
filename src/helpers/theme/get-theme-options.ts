import { defaultThemeOptions } from '../../constants';
import {
  type ContrastKey,
  type CursorColor,
  type PaletteKey,
  type SelectionColor,
  type Separators,
  type ThemeOptions,
} from '../../types';

type WorkspaceConfig = {
  get: <T>(key: string) => T | undefined;
};

export function getThemeOptions(config: WorkspaceConfig): ThemeOptions {
  const contrastKey = config.get<ContrastKey>('contrast');
  const cursorColor = config.get<CursorColor>('cursor');
  const paletteKey = config.get<PaletteKey>('palette');
  const selectionColor = config.get<SelectionColor>('selection');
  const separators = config.get<Separators>('separators');

  return {
    contrastKey: contrastKey ?? defaultThemeOptions.contrastKey,
    cursorColor: cursorColor ?? defaultThemeOptions.cursorColor,
    paletteKey: paletteKey ?? defaultThemeOptions.paletteKey,
    selectionColor: selectionColor ?? defaultThemeOptions.selectionColor,
    separators: separators ?? defaultThemeOptions.separators,
  };
}
