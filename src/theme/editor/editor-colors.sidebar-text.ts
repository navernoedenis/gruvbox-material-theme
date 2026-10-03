import { type ThemeOptions } from "../theme.types";

export function createSidebarTextColor(options: ThemeOptions) {
  const { colors, editor } = options;

  const sidebarTextColor = editor.sidebarBrightText
    ? colors.palette.fg1
    : colors.contrast.grey1;

  return {
    "sideBar.foreground": sidebarTextColor,
  };
}
