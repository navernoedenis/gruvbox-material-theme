type BaseColor =
  | 'aqua'
  | 'blue'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'yellow';

export type ThemePalette = 'classic' | 'material';
export type ThemeContrast = 'soft' | 'medium' | 'hard';

export type CursorColor = BaseColor | 'white';
export type PaletteColor = BaseColor | `${BaseColor}Dim`;
export type SelectionColor = BaseColor | 'grey';
export type Separators = boolean;

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
  cursor: CursorColor;
  enableSparators: boolean;
  palette: ThemePalette;
  selection: SelectionColor;
}

export interface PaletteColors extends Record<PaletteColor, string> {
  fg: string;
  fg0: string;
  fg1: string;
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
}

export interface SelectionColors {
  bg1: string;
  bg2: string;
  bg3: string;
}
