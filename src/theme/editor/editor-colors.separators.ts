import { type ThemeOptions } from "../theme.types";

export function createSeparatorsColor(options: ThemeOptions) {
  const { editor, colors } = options;

  const separatorsColor = editor.separators
    ? colors.contrast.bg3
    : colors.contrast.bg;

  return {
    "activityBar.border": separatorsColor,
    "contrastBorder": separatorsColor,
    "editorGroup.border": separatorsColor,
    "panel.border": separatorsColor,
    "sideBar.border": separatorsColor,
    "statusBar.border": separatorsColor,
    "tab.border": separatorsColor,
    "titleBar.border": separatorsColor,
  };
}
