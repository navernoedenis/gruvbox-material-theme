import {
  type BaseThemeOptions,
  type ContrastKey,
  type CursorColor,
  type EnvColor,
  type PaletteKey,
  type SelectionColor,
  type Separators,
  type SidebarBrightText as SBT,
} from "./theme.types";

type WorkspaceConfig = {
  get: <T>(key: string) => T | undefined;
};

export function getBaseThemeOptions(
  config: WorkspaceConfig,
  DEFAULT: BaseThemeOptions,
): BaseThemeOptions {
  const contrastKey = config.get<ContrastKey>("editor.contrast");
  const cursorColor = config.get<CursorColor>("editor.cursor");
  const paletteKey = config.get<PaletteKey>("editor.palette");
  const selectionColor = config.get<SelectionColor>("editor.selection");
  const separators = config.get<Separators>("editor.separators");
  const sidebarBrightText = config.get<SBT>("editor.sidebar-bright-text");

  const envColor = config.get<EnvColor>("tokens.env-color");

  return {
    editor: {
      contrastKey: contrastKey ?? DEFAULT.editor.contrastKey,
      cursorColor: cursorColor ?? DEFAULT.editor.cursorColor,
      paletteKey: paletteKey ?? DEFAULT.editor.paletteKey,
      selectionColor: selectionColor ?? DEFAULT.editor.selectionColor,
      separators: separators ?? DEFAULT.editor.separators,
      sidebarBrightText: sidebarBrightText ?? DEFAULT.editor.sidebarBrightText,
    },
    tokens: {
      envColor: envColor ?? DEFAULT.tokens.envColor,
    },
  };
}

export function checkIsDefaultThemeOptions(
  options: BaseThemeOptions,
  DEFAULT: BaseThemeOptions,
) {
  const { editor, tokens } = options;

  return [
    editor.contrastKey === DEFAULT.editor.contrastKey,
    editor.cursorColor === DEFAULT.editor.cursorColor,
    editor.paletteKey === DEFAULT.editor.paletteKey,
    editor.selectionColor === DEFAULT.editor.selectionColor,
    editor.separators === DEFAULT.editor.separators,
    editor.sidebarBrightText === DEFAULT.editor.sidebarBrightText,
    tokens.envColor === DEFAULT.tokens.envColor,
  ].every(Boolean);
}
