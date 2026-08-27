import { defaultThemeOptions } from '../../constants';
import { type ThemeOptions } from '../../types';

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrastKey === defaultThemeOptions.contrastKey &&
    options.cursorColor === defaultThemeOptions.cursorColor &&
    options.paletteKey === defaultThemeOptions.paletteKey &&
    options.selectionColor === defaultThemeOptions.selectionColor &&
    options.separators === defaultThemeOptions.separators
  );
}
