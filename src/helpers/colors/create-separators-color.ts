import { type ContrastColors } from '../../types';

export function createSeparatorsColor({
  isEnabled,
  contrastColors,
}: {
  isEnabled: boolean;
  contrastColors: ContrastColors;
}) {
  const separatorsColor = isEnabled ? contrastColors.bg3 : contrastColors.bg;

  return {
    'activityBar.border': separatorsColor,
    'contrastBorder': separatorsColor,
    'editorGroup.border': separatorsColor, 
    'editorGroupHeader.border': contrastColors.bg,
    'focusBorder': separatorsColor,
    'panel.border': separatorsColor,
    'sideBar.border': separatorsColor,
    'statusBar.border': separatorsColor,
    'tab.activeBorder': contrastColors.bg9,
    'tab.border': separatorsColor,
    'titleBar.border': separatorsColor,
  };
}
