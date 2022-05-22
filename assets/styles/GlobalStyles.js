import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const globalStyles = StyleSheet.create({
  sectionWrapper: {
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },

  forgotPasswordWrapper: {
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
  },

  forgotPasswordText: {
    color: COLORS.grayColor,
    textAlign: 'right',
  },

  headerLogoContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  headerLogoImg: {
    height: 300,
    width: 120,
  },

  footerActionWrapper: {
    marginVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 1,
    paddingVertical:
      Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 2,
    backgroundColor: COLORS.deepBlue,
    marginTop: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
  },

  headerImgHolder: {
    backgroundColor: COLORS.darkCyan,
    borderRadius: 20,
    width: 40,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.black,
    borderWidth: 1,
    borderStyle: 'solid',
  },

  headerImg: {
    width: 20,
    height: 20,
  },

  homeHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 1.5,
    paddingVertical: SIZES.padding * 1.5,
  },

  headerMenuIcon: {
    width: 40,
    height: 40,
  },

  headerProfileImg: {
    width: 40,
    height: 40,
  },

  headerSearchIcon: {},
});

export default globalStyles;