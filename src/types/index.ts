export type ThemePalette = 'classic' | 'material';

export type ThemeContrast = 'soft' | 'medium' | 'hard';

export interface TokenColor {
  name: string;
  scope: string;
  settings: Record<string, string>;
}

export interface Theme {
  palette: ThemePalette;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, string>;
}

export interface ThemeOptions {
  contrast: ThemeContrast;
  cursor: string;
  palette: ThemePalette;
  selection: string;
}

export interface PaletteColors {
  fg: string;
  fg0: string;
  fg1: string;

  aqua: string;
  aquaDim: string;
  blue: string;
  blueDim: string;
  green: string;
  greenDim: string;
  orange: string;
  orangeDim: string;
  purple: string;
  purpleDim: string;
  red: string;
  redDim: string;
  yellow: string;
  yellowDim: string;
}

export interface ContrastColors {
  bg: string;
  bg0: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  bg7: string;
  bg8: string;
  bg9: string;
  grey0: string;
  grey1: string;
  grey2: string;
  shadow: string;
}

export interface SelectionColors {
  bg1: string;
  bg2: string;
  bg3: string;
}
