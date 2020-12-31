import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLOR = {
  primary: '#5390ff',
  secondary: '#cacfd9',
  black: '#1e1f20',
  white: '#ffffff',
  lightgray: '#eff3f5',
  gray: '#8b9097',
};

export const SIZE = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZE.largeTitle,
    lineHeight: 40,
  },
  h1: {fontFamily: 'Roboto-Bold', fontSize: SIZE.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZE.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZE.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZE.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZE.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZE.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZE.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZE.body4, lineHeight: 22},
};

const appTheme = {COLOR, SIZE, FONTS};

export default appTheme;
