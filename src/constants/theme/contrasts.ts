import { type ContrastColors } from '../../types';

const commonContrastColors = {
  grey0: '#7c6f64',
  grey1: '#928374',
  grey2: '#a89984',
  shadow: '#00000070',
};

export const softContrast: ContrastColors = {
  ...commonContrastColors,
  bg: '#32302f',
  bg0: '#181919',
  bg1: '#242424',
  bg2: '#3c3836',
  bg3: '#403c3a',
  bg4: '#45403d',
  bg5: '#504945',
  bg6: '#5a524c',
  bg7: '#665c54',
  bg8: '#7c6f64',
  bg9: '#928374',
};

export const mediumContrast: ContrastColors = {
  ...commonContrastColors,
  bg: '#292828',
  bg0: '#101010',
  bg1: '#1c1c1c',
  bg2: '#32302f',
  bg3: '#383432',
  bg4: '#3c3836',
  bg5: '#45403d',
  bg6: '#504945',
  bg7: '#5a524c',
  bg8: '#665c54',
  bg9: '#7c6f64',
};

export const hardContrast: ContrastColors = {
  ...commonContrastColors,
  bg: '#202020',
  bg0: '#070808',
  bg1: '#131414',
  bg2: '#2a2827',
  bg3: '#2e2c2b',
  bg4: '#32302f',
  bg5: '#3d3835',
  bg6: '#46403d',
  bg7: '#514945',
  bg8: '#5a524c',
  bg9: '#665c54',
};
