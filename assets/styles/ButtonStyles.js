import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    margin: SIZES.padding,
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
});

export default buttonStyles;
