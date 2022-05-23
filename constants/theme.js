import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  bgColor: '#09354A',
  buttonBgColor: '#3A5B6C',

  // Other Colors
  borderColor: '#F4F4F4',
  placeHolderColor: '#97ABB3',
  grayColor: '#F7F7F7',
  transparent: 'transparent',

  // Button Colors
  disabledButton: '#E46F2499',
  defaultButton: '#E46F24',

  //Text COlors
  textColorOne: '#97ABB3',
  textColorTwo: '#7E949F',

  darkCyan: '#032130',
  grayColor1: '#828282',
  grayColor2: '#B9B9B9',
  grayColor3: '#7D7D7D',
  grayColor4: '#C4C4C4',
  seaSerpent: '#5CC4C4',

  deepBlue: '#09354A',
  deepOrange: '#FC7620',

  gray: '#F7F7F7',

  textBlue: '#196589',
  lightTextBlue: '#5e93ac',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  black: '#151B28',
  white: '#FFFFFF',
  lightDark: '#828282',

  progressProfile: '#64BFB6',
  breakerBay: '#5EAAA8',
  monteCarlo: '#73c7bf',
  tangaroa: '#032130',
  caribbeanGreen: '#28e576',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 37,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 28,
  body3: 15,
  body4: 14,
  body5: 13,
  body6: 12,

  // app dimensions
  width,
  height,
};

// export const FONTS = {
//   largeTitle: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Bold' : 'DMSans-Bold',
//     fontSize: SIZES.largeTitle,
//     lineHeight: 55,
//     letterSpacing: 0.35,
//   },
//   h1: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Bold' : 'DMSans-Bold',
//     fontSize: SIZES.h1,
//     lineHeight: 40,
//     fontWeight: '700',
//     letterSpacing: 0.35,
//   },
//   h2: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Bold' : 'DMSans-Bold',
//     fontSize: SIZES.h2,
//     lineHeight: 30,
//     fontWeight: '700',
//     letterSpacing: 0.35,
//   },
//   h3: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Medium' : 'DMSans-Medium',
//     fontSize: SIZES.h3,
//     lineHeight: 22,
//     fontWeight: '500',
//   },
//   h4: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Medium' : 'DMSans-Medium',
//     fontSize: SIZES.h4,
//     lineHeight: 22.13,
//     fontWeight: '700',
//   },
//   body1: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body1,
//     lineHeight: 36,
//     fontWeight: '700',
//   },
//   body2: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body2,
//     lineHeight: 37,
//     fontWeight: '700',
//   },
//   body3: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body3,
//     lineHeight: 22,
//     fontWeight: '400',
//     letterSpacing: 0.35,
//   },
//   body4: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body4,
//     lineHeight: 18.22,
//     fontWeight: '400',
//     letterSpacing: 0.4,
//   },
//   body5: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body5,
//     lineHeight: 22,
//     fontWeight: '400',
//   },
//   body6: {
//     fontFamily: Platform.OS === 'ios' ? 'DM Sans Regular' : 'DMSans-Regular',
//     fontSize: SIZES.body6,
//     lineHeight: 15.62,
//     fontWeight: '400',
//   },
// };

export const DUMMYDFODummNTS = {};

const appTheme = {COLORS, SIZES};

export default appTheme;
