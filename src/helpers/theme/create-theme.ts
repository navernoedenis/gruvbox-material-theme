import { contrastsRecord, palettesRecord } from '../../constants';
import { tokenColorsAdapter } from '../adapters';
import {
  createColors,
  createSelectionColors,
  createSemanticColors,
  createSeparatorsColor,
  createTokenColors,
} from '../colors';

import { type Theme, type ThemeOptions } from '../../types';

export function createTheme({
  contrast,
  cursor,
  palette,
  selection,
  separators,
}: ThemeOptions): Theme {
  const contrastColors = contrastsRecord[contrast];
  const paletteColors = palettesRecord[palette];

  const selectionColors = createSelectionColors({
    contrastColors,
    paletteColors,
    selection,
  });

  const colors = createColors({
    contrastColors,
    cursor,
    paletteColors,
    selectionColors,
  });

  const separatorColors = createSeparatorsColor({
    contrastColors,
    separators,
  });

  const tokenColorsRaw = createTokenColors({
    contrastColors,
    paletteColors,
  });

  return {
    palette,
    colors: { ...colors, ...separatorColors },
    tokenColors: tokenColorsAdapter(tokenColorsRaw),
    semanticHighlighting: true,
    semanticTokenColors: createSemanticColors(paletteColors),
  };
}
