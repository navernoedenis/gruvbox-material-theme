import { type ThemeOptions, type SelectionColors } from "../theme.types";

export function createSelectionColors(options: ThemeOptions) {
  const { colors, editor } = options;

  const isGrey = editor.selectionColor === "grey";
  const dimColor = `${editor.selectionColor}Dim` as keyof typeof colors.palette;
  const paletteColor = colors.palette[dimColor] ?? colors.contrast.bg6;

  const selectionColors: SelectionColors = {
    bg1: `${paletteColor}${isGrey ? "d0" : "60"}`,
    bg2: `${paletteColor}${isGrey ? "b0" : "40"}`,
    bg3: `${paletteColor}${isGrey ? "58" : "20"}`,
  };

  return {
    "editor.findRangeHighlightBackground": selectionColors.bg3,
    "editor.inactiveSelectionBackground": selectionColors.bg3,
    "editor.selectionBackground": selectionColors.bg2,
    "editor.selectionHighlightBackground": selectionColors.bg3,
    "selection.background": selectionColors.bg1,
  };
}
