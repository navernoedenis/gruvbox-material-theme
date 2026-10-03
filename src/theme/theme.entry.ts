import { createEditorColors } from "./editor/editor-colors.entry";
import { createSemanticColors } from "./semantic/semantic-colors.entry";
import { createTokenColors } from "./token/token-colors.entry";

import { CONTRASTS, PALETTES } from "./theme.constants";
import {
  type Theme,
  type BaseThemeOptions,
  type ThemeOptions,
} from "./theme.types";

export function createTheme(baseOptions: BaseThemeOptions): Theme {
  const contrast = CONTRASTS[baseOptions.editor.contrastKey];
  const palette = PALETTES[baseOptions.editor.paletteKey];

  const options = Object.assign(baseOptions, {
    colors: { contrast, palette },
  }) satisfies ThemeOptions;

  return {
    palette,
    colors: createEditorColors(options),
    tokenColors: createTokenColors(options),
    semanticHighlighting: true,
    semanticTokenColors: createSemanticColors(options),
  };
}
