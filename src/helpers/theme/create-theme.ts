import { contrastsRecord, palettesRecord } from '../../constants';
import { tokenColorsAdapter } from '../adapters';
import {
  createCursorColor,
  createEditorColors,
  createSelectionColors,
  createSemanticColors,
  createSeparatorsColor,
  createTokenColors,
} from '../colors';

import { type Theme, type ThemeOptions } from '../../types';

export function createTheme(options: ThemeOptions): Theme {
  const contrastColors = contrastsRecord[options.contrastKey];
  const paletteColors = palettesRecord[options.paletteKey];

  const payload = { contrastColors, paletteColors, ...options };

  const cursorColor = createCursorColor(payload);
  const editorColors = createEditorColors(payload);
  const selectionColors = createSelectionColors(payload);
  const separatorsColor = createSeparatorsColor(payload);
  const tokenColorsRaw = createTokenColors(payload);

  return {
    palette: paletteColors,
    colors: {
      ...cursorColor,
      ...editorColors,
      ...selectionColors,
      ...separatorsColor,
    },
    tokenColors: tokenColorsAdapter(tokenColorsRaw),
    semanticHighlighting: true,
    semanticTokenColors: createSemanticColors(paletteColors),
  };
}
