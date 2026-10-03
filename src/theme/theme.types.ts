type BaseColor =
  | "aqua"
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "red"
  | "yellow";

export type ContrastKey = "soft" | "medium" | "hard" | "slate";
export type CursorColor = BaseColor | "white";
export type PaletteColor = BaseColor | `${BaseColor}Dim`;
export type PaletteKey = "classic" | "material" | "pastel";
export type SelectionColor = BaseColor | "grey";
export type Separators = boolean;
export type SidebarBrightText = boolean;

export type EnvColor = Extract<BaseColor, "blue" | "orange" | "red" | "yellow">;

export interface TokenColor {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export interface Theme {
  palette: PaletteColors;
  colors: Record<string, string>;
  tokenColors: TokenColor[];
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, string>;
}

export interface BaseThemeOptions {
  editor: {
    contrastKey: ContrastKey;
    cursorColor: CursorColor;
    paletteKey: PaletteKey;
    selectionColor: SelectionColor;
    separators: Separators;
    sidebarBrightText: SidebarBrightText;
  };
  tokens: {
    envColor: EnvColor;
  };
}

export interface ThemeOptions extends BaseThemeOptions {
  colors: {
    contrast: ContrastColors;
    palette: PaletteColors;
  };
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

export interface PaletteColors extends Record<PaletteColor, string> {
  fg: string;
  fg0: string;
  fg1: string;
}

export interface SelectionColors {
  bg1: string;
  bg2: string;
  bg3: string;
}
