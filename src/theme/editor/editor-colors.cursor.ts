import { type ThemeOptions } from "../theme.types";

export function createCursorColor(options: ThemeOptions) {
  const { colors, editor } = options;

  const cursorTyped = editor.cursorColor as keyof typeof colors.palette;
  const cursorColor = colors.palette[cursorTyped] ?? colors.palette.fg;

  return {
    "editorCursor.foreground": cursorColor,
    "terminalCursor.foreground": cursorColor,
  };
}
