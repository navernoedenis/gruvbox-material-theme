import { type ContrastColors } from '../../types';

export function createSeparatorsColor({
  contrastColors,
  separators,
}: {
  contrastColors: ContrastColors;
  separators: boolean;
}) {
  const color = separators ? contrastColors.bg3 : contrastColors.bg;

  return {
    'activityBar.border': color,
    'contrastBorder': color,
    'editorGroup.border': color,
    'editorGroupHeader.border': contrastColors.bg,
    'focusBorder': color,
    'panel.border': color,
    'sideBar.border': color,
    'statusBar.border': color,
    'tab.activeBorder': contrastColors.bg9,
    'tab.border': color,
    'titleBar.border': color,
  };
}
