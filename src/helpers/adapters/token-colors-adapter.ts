import { type TokenColor, type TokenColorRaw } from '../../types';

export function tokenColorsAdapter(items: TokenColorRaw[]): TokenColor[] {
  return items.map((item) => {
    if (!Array.isArray(item.scope)) {
      return item as TokenColor;
    }

    return { ...item, scope: item.scope.join(', ') };
  });
}
