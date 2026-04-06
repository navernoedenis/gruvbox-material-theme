import {
  type ContrastColors,
  type PaletteColors,
  type SelectionColors,
} from '../../types';

export function createSelectionColors({
  contrast,
  palette,
  selection,
}: {
  contrast: ContrastColors;
  palette: PaletteColors;
  selection: string;
}): SelectionColors {
  const isGreyColor = selection === 'grey';
  const dimColor = `${selection}Dim` as keyof typeof palette;
  const paletteColor = palette[dimColor] ?? contrast.bg6;

  return {
    bg1: `${paletteColor}${isGreyColor ? 'd0' : '60'}`,
    bg2: `${paletteColor}${isGreyColor ? 'b0' : '40'}`,
    bg3: `${paletteColor}${isGreyColor ? '58' : '20'}`,
  };
}
