import { type CursorColor, type PaletteColors } from '../../types';

export function createCursorColor({
  cursorColor,
  paletteColors,
}: {
  cursorColor: CursorColor;
  paletteColors: PaletteColors;
}) {
  const cursorTyped = cursorColor as keyof typeof paletteColors;
  const color = paletteColors[cursorTyped] ?? paletteColors.fg;

  return {
    'editorCursor.foreground': color,
    'terminalCursor.foreground': color,
  };
}
