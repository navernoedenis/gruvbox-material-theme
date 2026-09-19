import { createEditorColors } from "./editor/editor-colors.entry";
import { createSemanticColors } from "./semantic/semantic-colors.entry";
import { createTokenColors } from "./token/token-colors.entry";

import { CONTRASTS, PALETTES } from "./theme.constants";
import { type Theme, type ThemeOptions } from "./theme.types";

export function createTheme(options: ThemeOptions): Theme {
  const contrast = CONTRASTS[options.contrastKey];
  const palette = PALETTES[options.paletteKey];
  const payload = { contrast, palette, ...options };

  return {
    palette,
    colors: createEditorColors(payload),
    tokenColors: createTokenColors(payload),
    semanticHighlighting: true,
    semanticTokenColors: createSemanticColors(palette),
  };
}
