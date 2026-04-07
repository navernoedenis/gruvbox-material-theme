import {
  classicPallete,
  materialPalette,
} from '../../constants/theme/palettes';

import {
  hardContrast,
  mediumContrast,
  softContrast,
} from '../../constants/theme/contrasts';

import {
  createColors,
  createSelectionColors,
  createSemanticColors,
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

export function createTheme(themeOptions: ThemeOptions): Theme {
  const { palette, contrast, selection, cursor } = themeOptions;

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

  const tokenColors = createTokenColors({ contrastColors, paletteColors });
  const semanticTokenColors = createSemanticColors(paletteColors);

  return {
    palette: themeOptions.palette,
    colors,
    tokenColors,
    semanticHighlighting: true,
    semanticTokenColors,
  };
}
