import {
  type ColorsPayload,
  type SelectionColor,
  type SelectionColors,
} from "../theme.types";

type SelctionColorsProps = ColorsPayload & {
  selectionColor: SelectionColor;
};

export function createSelectionColors({
  contrast,
  palette,
  selectionColor,
}: SelctionColorsProps) {
  const isGrey = selectionColor === "grey";
  const dimColor = `${selectionColor}Dim` as keyof typeof palette;
  const paletteColor = palette[dimColor] ?? contrast.bg6;

  const colors: SelectionColors = {
    bg1: `${paletteColor}${isGrey ? "d0" : "60"}`,
    bg2: `${paletteColor}${isGrey ? "b0" : "40"}`,
    bg3: `${paletteColor}${isGrey ? "58" : "20"}`,
  };

  return {
    "editor.findRangeHighlightBackground": colors.bg3,
    "editor.inactiveSelectionBackground": colors.bg3,
    "editor.selectionBackground": colors.bg2,
    "editor.selectionHighlightBackground": colors.bg3,
    "selection.background": colors.bg1,
  };
}
