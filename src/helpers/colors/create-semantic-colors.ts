import { type PaletteColors } from '../../types';

export function createSemanticColors(paletteColors: PaletteColors) {
  return {
    'class:python': paletteColors.aqua,
    'class:typescript': paletteColors.aqua,
    'class:typescriptreact': paletteColors.aqua,
    'enum:typescript': paletteColors.aqua,
    'enum:typescriptreact': paletteColors.aqua,
    'enumMember:typescript': paletteColors.yellow,
    'enumMember:typescriptreact': paletteColors.yellow,
    'interface:typescript': paletteColors.aqua,
    'interface:typescriptreact': paletteColors.aqua,
    'intrinsic:python': paletteColors.purple,
    'macro:rust': paletteColors.aqua,
    'memberOperatorOverload': paletteColors.orange,
    'module:python': paletteColors.blue,
    'namespace:rust': paletteColors.aqua,
    'namespace:typescript': paletteColors.aqua,
    'namespace:typescriptreact': paletteColors.aqua,
    'operatorOverload': paletteColors.orange,
    'property.defaultLibrary:javascript': paletteColors.purple,
    'property.defaultLibrary:javascriptreact': paletteColors.purple,
    'property.defaultLibrary:typescript': paletteColors.purple,
    'property.defaultLibrary:typescriptreact': paletteColors.purple,
    'selfKeyword:rust': paletteColors.purple,
    'variable.defaultLibrary:javascript': paletteColors.purple,
    'variable.defaultLibrary:javascriptreact': paletteColors.purple,
    'variable.defaultLibrary:typescript': paletteColors.purple,
    'variable.defaultLibrary:typescriptreact': paletteColors.purple,
  };
}
