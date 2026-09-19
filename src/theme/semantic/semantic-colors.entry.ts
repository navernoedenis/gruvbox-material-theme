import { type PaletteColors } from "../theme.types";

export function createSemanticColors(palette: PaletteColors) {
  return {
    "class:python": palette.aqua,
    "class:typescript": palette.aqua,
    "class:typescriptreact": palette.aqua,
    "enum:typescript": palette.aqua,
    "enum:typescriptreact": palette.aqua,
    "enumMember:typescript": palette.yellow,
    "enumMember:typescriptreact": palette.yellow,
    "interface:typescript": palette.aqua,
    "interface:typescriptreact": palette.aqua,
    "intrinsic:python": palette.purple,
    "macro:rust": palette.aqua,
    "memberOperatorOverload": palette.orange,
    "module:python": palette.blue,
    "namespace:rust": palette.aqua,
    "namespace:typescript": palette.aqua,
    "namespace:typescriptreact": palette.aqua,
    "operatorOverload": palette.orange,
    "property.defaultLibrary:javascript": palette.purple,
    "property.defaultLibrary:javascriptreact": palette.purple,
    "property.defaultLibrary:typescript": palette.purple,
    "property.defaultLibrary:typescriptreact": palette.purple,
    "selfKeyword:rust": palette.purple,
    "variable.defaultLibrary:javascript": palette.purple,
    "variable.defaultLibrary:javascriptreact": palette.purple,
    "variable.defaultLibrary:typescript": palette.purple,
    "variable.defaultLibrary:typescriptreact": palette.purple,
  };
}
