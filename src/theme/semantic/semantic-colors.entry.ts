import { type ThemeOptions } from "../theme.types";

export function createSemanticColors(options: ThemeOptions) {
  const { colors } = options;

  return {
    "class:python": colors.palette.aqua,
    "class:typescript": colors.palette.aqua,
    "class:typescriptreact": colors.palette.aqua,
    "enum:typescript": colors.palette.aqua,
    "enum:typescriptreact": colors.palette.aqua,
    "enumMember:typescript": colors.palette.yellow,
    "enumMember:typescriptreact": colors.palette.yellow,
    "interface:typescript": colors.palette.aqua,
    "interface:typescriptreact": colors.palette.aqua,
    "intrinsic:python": colors.palette.purple,
    "macro:rust": colors.palette.aqua,
    "memberOperatorOverload": colors.palette.orange,
    "module:python": colors.palette.blue,
    "namespace:rust": colors.palette.aqua,
    "namespace:typescript": colors.palette.aqua,
    "namespace:typescriptreact": colors.palette.aqua,
    "operatorOverload": colors.palette.orange,
    "property.defaultLibrary:javascript": colors.palette.purple,
    "property.defaultLibrary:javascriptreact": colors.palette.purple,
    "property.defaultLibrary:typescript": colors.palette.purple,
    "property.defaultLibrary:typescriptreact": colors.palette.purple,
    "selfKeyword:rust": colors.palette.purple,
    "variable.defaultLibrary:javascript": colors.palette.purple,
    "variable.defaultLibrary:javascriptreact": colors.palette.purple,
    "variable.defaultLibrary:typescript": colors.palette.purple,
    "variable.defaultLibrary:typescriptreact": colors.palette.purple,
  };
}
