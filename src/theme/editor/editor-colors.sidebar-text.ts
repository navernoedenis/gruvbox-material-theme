import { type SidebarBrightText, type ColorsPayload } from "../theme.types";

type SidebarTextColorsProps = ColorsPayload & {
  sidebarBrightText: SidebarBrightText;
};

export function createSidebarTextColor({
  contrast,
  palette,
  sidebarBrightText,
}: SidebarTextColorsProps) {
  return {
    "sideBar.foreground": sidebarBrightText ? palette.fg1 : contrast.grey1,
  };
}
