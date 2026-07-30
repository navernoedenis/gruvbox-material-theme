import { defaultThemeOptions } from '../../constants';
import { type ThemeOptions } from '../../types';

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrast === defaultThemeOptions.contrast &&
    options.cursor === defaultThemeOptions.cursor &&
    options.palette === defaultThemeOptions.palette &&
    options.selection === defaultThemeOptions.selection &&
    options.separators === defaultThemeOptions.separators
  );
}
