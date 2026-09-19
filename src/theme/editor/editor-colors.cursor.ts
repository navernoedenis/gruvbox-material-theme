import { type ColorsPayload, type CursorColor } from "../theme.types";

type CursorColorProps = ColorsPayload & {
  cursorColor: CursorColor;
};

export function createCursorColor({ cursorColor, palette }: CursorColorProps) {
  const cursorTyped = cursorColor as keyof typeof palette;
  const color = palette[cursorTyped] ?? palette.fg;

  return {
    "editorCursor.foreground": color,
    "terminalCursor.foreground": color,
  };
}
