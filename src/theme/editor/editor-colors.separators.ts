import { type ColorsPayload, type Separators } from "../theme.types";

type SeparatorsColorProps = ColorsPayload & {
  separators: Separators;
};

export function createSeparatorsColor({
  separators,
  ...colors
}: SeparatorsColorProps) {
  const color = separators ? colors.contrast.bg3 : colors.contrast.bg;

  return {
    "activityBar.border": color,
    "contrastBorder": color,
    "editorGroup.border": color,
    "panel.border": color,
    "sideBar.border": color,
    "statusBar.border": color,
    "tab.border": color,
    "titleBar.border": color,
  };
}
