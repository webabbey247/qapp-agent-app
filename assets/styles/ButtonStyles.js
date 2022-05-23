import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: SIZES.padding * 1,
    marginBottom: SIZES.padding * 2,
  },

  defaultButton: {
    height: 60,
    borderRadius: 5,
    backgroundColor: COLORS.deepOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addBankWrapper: {
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 0.6,
    marginBottom: SIZES.padding * 1,
  },
});

export default buttonStyles;
