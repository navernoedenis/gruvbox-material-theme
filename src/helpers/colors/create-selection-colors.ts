import {
  type ContrastColors,
  type PaletteColors,
  type SelectionColor,
  type SelectionColors,
} from '../../types';

export function createSelectionColors({
  contrastColors,
  paletteColors,
  selectionColor,
}: {
  contrastColors: ContrastColors;
  paletteColors: PaletteColors;
  selectionColor: SelectionColor;
}) {
  const isGrey = selectionColor === 'grey';
  const dimColor = `${selectionColor}Dim` as keyof typeof paletteColors;
  const paletteColor = paletteColors[dimColor] ?? contrastColors.bg6;

  const colors: SelectionColors = {
    bg1: `${paletteColor}${isGrey ? 'd0' : '60'}`,
    bg2: `${paletteColor}${isGrey ? 'b0' : '40'}`,
    bg3: `${paletteColor}${isGrey ? '58' : '20'}`,
  };

  return {
    'editor.findRangeHighlightBackground': colors.bg3,
    'editor.inactiveSelectionBackground': colors.bg3,
    'editor.selectionBackground': colors.bg2,
    'editor.selectionHighlightBackground': colors.bg3,
    'selection.background': colors.bg1,
  };
}
