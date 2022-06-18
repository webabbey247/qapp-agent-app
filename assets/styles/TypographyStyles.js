import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const typographyStyles = StyleSheet.create({

  textHighLight: {
    color: COLORS.defaultButton,
  },

  textHeading: {
    color: COLORS.grayColor,
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat Bold' : 'Montserrat-Bold',
    marginBottom: SIZES.padding * 0.5,
  },

  textHeadingTwo: {},

  textParagraph: {
    color: COLORS.grayColor,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 16,
    opacity: .8,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat Regular' : 'Montserrat-Regular',
  },

  textFooterAction: {
    marginBottom: SIZES.padding * 3,
    textAlign: 'center',
    color: COLORS.grayColor,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 16,
    opacity: .8,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat Regular' : 'Montserrat-Regular',
  },

  defaultButtonText: {
    color: COLORS.borderColor,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 16,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat Bold' : 'Montserrat-Bold',
  },

});

export default typographyStyles;
