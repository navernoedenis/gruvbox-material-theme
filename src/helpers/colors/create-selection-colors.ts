import {
  type ContrastColors,
  type PaletteColors,
  type SelectionColor,
  type SelectionColors,
} from '../../types';

export function createSelectionColors({
  contrastColors,
  paletteColors,
  selection,
}: {
  contrastColors: ContrastColors;
  paletteColors: PaletteColors;
  selection: SelectionColor;
}): SelectionColors {
  const isGrey = selection === 'grey';
  const dimColor = `${selection}Dim` as keyof typeof paletteColors;
  const paletteColor = paletteColors[dimColor] ?? contrastColors.bg6;

  return {
    bg1: `${paletteColor}${isGrey ? 'd0' : '60'}`,
    bg2: `${paletteColor}${isGrey ? 'b0' : '40'}`,
    bg3: `${paletteColor}${isGrey ? '58' : '20'}`,
  };
}
