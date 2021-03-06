import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const formStyles = StyleSheet.create({
  formWrapper: {
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
  },

  formLabel: {
    color: COLORS.grayColor,
    marginVertical: SIZES.padding * 1,
  },

  formCenterLabel: {
    color: COLORS.grayColor,
    marginVertical: SIZES.padding * 1.2,
    textAlign: 'center',
  },

  formBottomLabel: {
    color: COLORS.grayColor3,
    marginVertical: SIZES.padding * 0.5,
  },

  formErrorText: {
    color: '#FC7620',
    marginTop: SIZES.padding * 1,
  },

  defaultTextInput: {
    borderColor: COLORS.borderColor,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: SIZES.padding * 2,
    height: 55,
    color: COLORS.grayColor,
    borderRadius: 5,
  },

  defaultTextInputIconHolder: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    width: 30,
    height: 30,
  },

  defaultTextInputIcon: {
    width: 25,
    height: 25,
  },

  defaultTextInputCountryHolder: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    width: 70,
    height: 30,
    flexDirection: 'row',
  },

  defaultTextInputCountryIcon: {
    width: 25,
    height: 15,
    marginHorizontal: 5,
    marginTop: 5,
  },

  homeSearchFormContainer: {
    paddingHorizontal: SIZES.padding * 2,
  },

  homeSearchTextinput: {
    borderColor: COLORS.borderColor,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: SIZES.padding * 2,
    height: 55,
    color: COLORS.grayColor,
    borderRadius: 5,
  },
});

export default formStyles;
