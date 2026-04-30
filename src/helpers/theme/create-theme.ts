import { classicPallete, materialPalette } from '../../constants/theme/palette';

import {
  hardContrast,
  mediumContrast,
  softContrast,
} from '../../constants/theme/contrast';

import {
  createColors,
  createSelectionColors,
  createSemanticColors,
  createSeparatorsColor,
  createTokenColors,
} from '../colors';

import {
  type ContrastColors,
  type PaletteColors,
  type Theme,
  type ThemeContrast,
  type ThemeOptions,
  type ThemePalette,
} from '../../types';

const paletteColorsRecord: Record<ThemePalette, PaletteColors> = {
  classic: classicPallete,
  material: materialPalette,
};

const contrastColorsRecord: Record<ThemeContrast, ContrastColors> = {
  hard: hardContrast,
  medium: mediumContrast,
  soft: softContrast,
};

export function createTheme({
  contrast,
  cursor,
  palette,
  selection,
  separators,
}: ThemeOptions): Theme {
  const paletteColors = paletteColorsRecord[palette];
  const contrastColors = contrastColorsRecord[contrast];

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

  const separatorsColor = createSeparatorsColor({
    isEnabled: separators,
    contrastColors,
  });

  return {
    palette,
    colors: {
      ...colors,
      ...separatorsColor,
    },
    tokenColors: createTokenColors({
      contrastColors,
      paletteColors,
    }),
    semanticHighlighting: true,
    semanticTokenColors: createSemanticColors(paletteColors),
  };
}
