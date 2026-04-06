import { type PaletteColors } from '../../types';

export function createSemanticColors(palette: PaletteColors) {
  return {
    'class:python': palette.aqua,
    'class:typescript': palette.aqua,
    'class:typescriptreact': palette.aqua,
    'enum:typescript': palette.purple,
    'enum:typescriptreact': palette.purple,
    'enumMember:typescript': palette.blue,
    'enumMember:typescriptreact': palette.blue,
    'interface:typescript': palette.aqua,
    'interface:typescriptreact': palette.aqua,
    'intrinsic:python': palette.purple,
    'macro:rust': palette.aqua,
    'memberOperatorOverload': palette.orange,
    'module:python': palette.blue,
    'namespace:rust': palette.purple,
    'namespace:typescript': palette.purple,
    'namespace:typescriptreact': palette.purple,
    'operatorOverload': palette.orange,
    'property.defaultLibrary:javascript': palette.purple,
    'property.defaultLibrary:javascriptreact': palette.purple,
    'property.defaultLibrary:typescript': palette.purple,
    'property.defaultLibrary:typescriptreact': palette.purple,
    'selfKeyword:rust': palette.purple,
    'variable.defaultLibrary:javascript': palette.purple,
    'variable.defaultLibrary:javascriptreact': palette.purple,
    'variable.defaultLibrary:typescript': palette.purple,
    'variable.defaultLibrary:typescriptreact': palette.purple,
  };
}
