import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const HomeScreenStyles = StyleSheet.create({
  subSectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 2,
    marginVertical: SIZES.padding * 1,
  },

  subSectionLTR: {
    color: COLORS.grayColor,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    marginTop: SIZES.padding * 0.5,
  },

  subSectionRTLWrapper: {
    backgroundColor: COLORS.buttonBgColor,
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
  },

  subSectionRTL: {
    color: COLORS.grayColor,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
  },

  bankCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: SIZES.padding * 2,
    marginVertical: SIZES.padding * 1.5,
  },

  transactionListContainer: {
    paddingHorizontal: SIZES.padding * 2,
    display: 'flex',
    flexDirection: 'column',
    marginVertical: SIZES.padding * 1,
  },
});

export default HomeScreenStyles;
