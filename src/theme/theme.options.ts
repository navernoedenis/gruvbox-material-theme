import { defaultThemeOptions as DEFAULT } from "./theme.constants";
import {
  type SidebarBrightText as SBT,
  type ContrastKey,
  type CursorColor,
  type PaletteKey,
  type SelectionColor,
  type Separators,
  type ThemeOptions,
} from "./theme.types";

type WorkspaceConfig = {
  get: <T>(key: string) => T | undefined;
};

export function getThemeOptions(config: WorkspaceConfig): ThemeOptions {
  const contrastKey = config.get<ContrastKey>("contrast");
  const cursorColor = config.get<CursorColor>("cursor");
  const paletteKey = config.get<PaletteKey>("palette");
  const selectionColor = config.get<SelectionColor>("selection");
  const separators = config.get<Separators>("separators");
  const sidebarBrightText = config.get<SBT>("sidebar.bright-text");

  return {
    contrastKey: contrastKey ?? DEFAULT.contrastKey,
    cursorColor: cursorColor ?? DEFAULT.cursorColor,
    paletteKey: paletteKey ?? DEFAULT.paletteKey,
    selectionColor: selectionColor ?? DEFAULT.selectionColor,
    separators: separators ?? DEFAULT.separators,
    sidebarBrightText: sidebarBrightText ?? DEFAULT.sidebarBrightText,
  };
}

export function checkIsDefaultThemeOptions(options: ThemeOptions) {
  return (
    options.contrastKey === DEFAULT.contrastKey &&
    options.cursorColor === DEFAULT.cursorColor &&
    options.paletteKey === DEFAULT.paletteKey &&
    options.selectionColor === DEFAULT.selectionColor &&
    options.separators === DEFAULT.separators &&
    options.sidebarBrightText === DEFAULT.sidebarBrightText
  );
}
