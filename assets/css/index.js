import {StyleSheet, Dimensions, Platform} from 'react-native';
import {COLORS, SIZES, FONTS, images} from '../../constants';

const styleGeneral = StyleSheet.create({
  generalHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 1,
    paddingVertical:
      Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 0.2,
    backgroundColor: COLORS.deepBlue,
  },
  generalHeaderImgHolder: {
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

  generalHeaderImg: {
    width: 20,
    height: 20,
  },

  generalHeaderTextContainer: {
    marginTop: Platform.OS === 'ios' ? SIZES.padding * 1.5 : SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 3,
  },

  generalHeaderText: {
    color: COLORS.grayColor,
    ...FONTS.body2,
  },

  generalHeaderParagraph: {
    marginTop: SIZES.padding,
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  secondaryHeaderTextContainer: {
    marginTop: Platform.OS === 'ios' ? SIZES.padding * 6 : SIZES.padding * 9,
    paddingHorizontal: SIZES.padding * 3,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  secondaryHeaderText: {
    color: COLORS.deepBlue,
    ...FONTS.h2,
  },

  secondaryHeaderParagraph: {
    marginTop: SIZES.padding,
    color: COLORS.grayColor1,
    ...FONTS.body4,
    textAlign: 'center',
  },

  generalForgotPasswordWrapper: {
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
  },

  generalForgotPasswordText: {
    marginVertical: SIZES.padding * 2,
    color: COLORS.grayColor,
    ...FONTS.body3,
    textAlign: 'right',
  },

  generalModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  generalModal: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.textBlue,
    borderRadius: SIZES.radius,
  },
  generalFlatlistModal: {
    padding: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
  },

  modalFooterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding * 2,
  },

  modalFooterWrapperIcon: {
    width: 20,
    height: 20,
  },
});

const styleWalkThroughScreen = StyleSheet.create({
  walkthroughContainer: {
    flex: 1,
  },
  swiperContainer: {
    flex: 1,
    marginTop: SIZES.padding * 2,
  },
  swiperPaginationStyle: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? SIZES.height * 0.58 : SIZES.height * 0.62,
  },
  swiperDotStyle: {
    borderColor: COLORS.deepOrange,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.transparent,
  },
  swiperActiveDotStyle: {
    width: 25,
    height: 10,
    borderRadius: 10,
  },
  swiperViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImgHolder: {
    marginHorizontal: SIZES.padding,
  },
  swiperImg: {
    width: SIZES.width,
    height: SIZES.height / 3,
  },
  swiperTextWrapper: {
    marginTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },
  swiperTextHeader: {
    ...FONTS.h1,
    color: COLORS.grayColor,
    textAlign: 'center',
  },
  swiperTextSubtitle: {
    ...FONTS.h1,
    color: COLORS.deepOrange,
    textAlign: 'center',
  },
  swiperTextParagraph: {
    marginTop: SIZES.padding * 1,
    ...FONTS.body3,
    color: COLORS.grayColor,
    textAlign: 'center',
    paddingHorizontal: SIZES.padding * 2,
  },

  walkthroughButtonContainer: {
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  walkthroughFooter: {
    marginVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },
});

const styleAuthScreen = StyleSheet.create({
  transferOptionContainer: {
    flex: 1,
    marginTop: SIZES.padding * 3,
  },

  loginOptionContainer: {
    flex: 1,
    marginTop: SIZES.padding * 4,
    paddingHorizontal: SIZES.padding * 3,
  },

  loginOptionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkCyan,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 0.5,
    borderRadius: 10,
  },

  loginOptionsTab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 1,
    width: '50%',
  },

  loginOptionsActiveTab: {
    borderColor: COLORS.deepBlue,
    backgroundColor: COLORS.deepBlue,
  },

  loginOptionsInActiveTab: {
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.transparent,
  },

  loginOptionsTabText: {
    color: COLORS.grayColor,
    textAlign: 'center',
    ...FONTS.body3,
  },

  authButtonWrapper: {
    margin: SIZES.padding,
    paddingHorizontal: SIZES.padding * 1,
    marginBottom: SIZES.padding * 2,
  },

  authOTPButtonWrapper: {
    margin: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
  },

  authFooterWrapper: {
    marginTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },

  authOTPFooterWrapper: {
    alignItems: 'center',
    marginVertical: SIZES.padding * 2,
  },
});

const styleButtons = StyleSheet.create({
  defaultButton: {
    height: 60,
    borderRadius: 5,
    backgroundColor: COLORS.deepOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButton: {
    // marginTop: SIZES.padding * 1,
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.darkCyan,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBlueButton: {
    width: 150,
    height: 55,
    borderRadius: 10,
    backgroundColor: COLORS.breakerBay,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textBlueDualButton: {
    marginLeft: SIZES.padding * 2,
    width: 150,
    height: 55,
    borderRadius: 10,
    backgroundColor: COLORS.breakerBay,
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultButtonText: {
    color: COLORS.darkCyan,
    ...FONTS.h4,
  },

  secondaryButtonText: {
    color: COLORS.white,
    ...FONTS.h4,
  },

  textBlueButtonText: {
    color: COLORS.tangaroa,
    ...FONTS.h4,
  },

  defaultOutlineButton: {
    marginVertical: SIZES.padding * 2,
    height: 60,
    borderRadius: 10,
    backgroundColor: COLORS.transparent,
    borderColor: COLORS.deepOrange,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  defaultOutlineText: {
    color: COLORS.deepOrange,
    ...FONTS.h4,
  },
});

const styleFooter = StyleSheet.create({
  footerText: {
    marginBottom: SIZES.padding * 3,
    color: COLORS.grayColor,
    ...FONTS.body4,
    textAlign: 'center',
  },

  authOTPFooterText: {
    color: COLORS.grayColor2,
    ...FONTS.body3,
    textAlign: 'center',
  },
  footerSecondaryText: {
    color: COLORS.deepOrange,
    fontWeight: '500',
  },

  footerTextBlueText: {
    color: COLORS.breakerBay,
    fontWeight: '500',
  },
});

const styleFormComponents = StyleSheet.create({
  formWrapper: {
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
  },

  formLabel: {
    color: COLORS.grayColor,
    ...FONTS.body6,
    marginVertical: SIZES.padding * 1,
  },

  formCenterLabel: {
    color: COLORS.grayColor,
    ...FONTS.body4,
    marginVertical: SIZES.padding * 1.2,
    textAlign: 'center',
  },

  formBottomLabel: {
    color: COLORS.grayColor3,
    ...FONTS.body6,
    marginVertical: SIZES.padding * 0.5,
  },

  formErrorText: {
    color: '#FC7620',
    ...FONTS.body6,
    marginTop: SIZES.padding * 1,
  },

  phoneCodeContainer: {
    flexDirection: 'row',
  },

  phoneCodeWrapper: {
    width: 70,
    backgroundColor: COLORS.darkCyan,
    paddingHorizontal: SIZES.padding * 1,
    height: 55,
    color: COLORS.grayColor,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    marginRight: 3,
    ...FONTS.body3,
  },

  phoneCodeImgHolder: {
    justifyContent: 'center',
  },
  phoneCodeImg: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  phoneCodeTextHolder: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  phoneCodeText: {
    color: COLORS.textBlue,
    ...FONTS.body3,
  },

  phoneCodeDropDownImgHolder: {
    justifyContent: 'center',
  },

  phoneCodeDropDownImg: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
    // marginLeft: 5,
  },

  phoneCodeTextInput: {
    flex: 1,
    backgroundColor: COLORS.darkCyan,
    paddingHorizontal: SIZES.padding * 2,
    height: 55,
    color: COLORS.grayColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    // borderRadius: 10,
    ...FONTS.body3,
  },

  defaultTextInput: {
    backgroundColor: COLORS.darkCyan,
    paddingHorizontal: SIZES.padding * 2,
    height: 55,
    color: COLORS.grayColor,
    borderRadius: 5,
    ...FONTS.body3,
  },

  defaultTextInputIconHolder: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    width: 30,
    height: 30,
  },

  defaultTextInputIcon: {
    width: 20,
    height: 13,
  },

  labelDivider: {
    textAlign: 'center',
    color: COLORS.textBlue,
    ...FONTS.body3,
  },

  inlineOTPContainer: {
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 3,
    alignItems: 'center',
  },

  inlineOTPWrapper: {
    flex: 1,
    marginTop: SIZES.padding * 1,
    flexDirection: 'row',
  },

  inlineTransferOTPWrapper: {
    marginTop: SIZES.padding * 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inlineOTPTextInput: {
    borderBottomColor: COLORS.darkCyan,
    borderBottomWidth: 1,
    textAlign: 'center',
    height: 50,
    width: 50,
    color: COLORS.deepBlue,
    borderRadius: 5,
    ...FONTS.body3,
  },

  inlinePinTextInput: {
    backgroundColor: COLORS.darkCyan,
    textAlign: 'center',
    height: 30,
    width: 30,
    color: COLORS.deepBlue,
    borderRadius: 20,
    ...FONTS.body3,
    marginRight: SIZES.padding * 1.5,
  },
});

const styleTransactionSummary = StyleSheet.create({
  TransactionSummaryContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 2,
    marginVertical: SIZES.padding * 2,
  },

  TransactionSummaryHeaderWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },

  TransactionSummaryHeader: {
    textAlign: 'center',
    ...FONTS.body2,
    color: COLORS.seaSerpent,
    marginBottom: SIZES.padding * 1,
  },

  TransactionSummaryParagraph: {
    textAlign: 'center',
    marginTop: SIZES.padding * 0.2,
    marginBottom: SIZES.padding * 2,
    color: COLORS.grayColor,
    ...FONTS.body4,
    paddingHorizontal: SIZES.padding * 2.2,
  },

  TransactionTokenWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.2,
    backgroundColor: '#245973',
    borderRadius: 10,
    paddingVertical: SIZES.padding * 2,
  },

  TransactionTokenTopParagraph: {
    textAlign: 'center',
    marginBottom: SIZES.padding * 1,
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  TransactionTokenTopHeader: {
    textAlign: 'center',
    ...FONTS.body2,
    color: COLORS.seaSerpent,
    marginBottom: SIZES.padding * 1,
  },

  TransactionTokenBottomTextHeader: {
    color: COLORS.grayColor,
    ...FONTS.body6,
    marginVertical: SIZES.padding * 0.5,
    textAlign: 'center',
  },

  TransactionTokenBottomText: {
    color: COLORS.grayColor,
    ...FONTS.body6,
    textAlign: 'center',
  },

  TransactionButtonWrapper: {
    marginVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  TransactionSummaryFooter: {
    marginVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
  },

  TransactionSummaryAltHeader: {
    textAlign: 'center',
    marginBottom: SIZES.padding * 0.2,
    color: COLORS.grayColor,
    ...FONTS.body4,
  },

  TransactionSummaryAltParagraph: {
    textAlign: 'center',
    ...FONTS.body2,
    color: COLORS.seaSerpent,
    marginBottom: SIZES.padding * 2,
  },

  TransactionAmountWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.32,
    backgroundColor: '#245973',
    borderRadius: 10,
    paddingVertical: SIZES.padding * 1,
  },

  TransactionAmountTopParagraph: {
    textAlign: 'center',
    marginBottom: SIZES.padding * 1,
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  TransactionAmountTopHeader: {
    textAlign: 'center',
    ...FONTS.h1,
    color: COLORS.white,
    marginBottom: SIZES.padding * 1,
  },

  TransactionAmountBottomTextHeader: {
    color: COLORS.grayColor,
    ...FONTS.body4,
    textAlign: 'center',
  },

  TransactionAmountBottomText: {
    color: COLORS.grayColor,
    ...FONTS.body4,
    textAlign: 'center',
    marginLeft: SIZES.padding * 1,
  },
});

const styleBankDashboard = StyleSheet.create({
  // Dashboard Header Section
  homeScreenHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: Platform.OS === 'ios' ? SIZES.padding * 1 : null,
  },

  homeScreenHeaderLTR: {flexDirection: 'row'},

  homeScreenHeaderLTRImgHolder: {
    width: 65,
    height: 65,
    marginRight: SIZES.padding * 1.2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.progressProfile,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  homeScreenHeaderLTRImg: {
    width: 55,
    height: 55,
  },

  homeScreenHeaderLTRTextHolder: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeScreenHeaderLTRText: {
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  homeScreenHeaderRTL: {
    flexDirection: 'row',
  },

  homeScreenHeaderRTLImgHolder: {
    width: 40,
    height: 40,
    marginRight: SIZES.padding * 1.3,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeScreenHeaderRTLLastImgHolder: {
    width: 40,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  homeScreenHeaderRTLImg: {
    width: 20,
    height: 20,
  },

  // Account Summary Section
  accountSummaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding * 2,
  },

  accountSummaryCircle: {
    backgroundColor: COLORS.transparent,
    height: 250,
    width: 250,
    borderRadius: 250,
    borderColor: COLORS.progressProfile,
    borderWidth: 12,
    borderStyle: 'solid',
    shadowColor: '#64BFB6',
    shadowOffset: {
      height: -5,
      width: 8,
    },
    shadowOpacity: 1.0,
    shadowRadius: 10,
    // Android shadow
    elevation: 4,
  },

  accountSummaryCircleWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding * 2,
  },

  accountSummaryCircleImgHolder: {
    width: 50,
    height: 50,
    marginTop: SIZES.padding * 1,
  },

  accountSummaryCircleImg: {
    width: 50,
    height: 50,
  },

  accountSummaryCircleTextHolder: {
    marginTop: SIZES.padding * 1.4,
  },

  accountSummaryCircleTextTop: {
    textAlign: 'center',
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  accountSummaryCircleTextMiddle: {
    textAlign: 'center',
    marginTop:
      Platform.OS === 'ios' ? SIZES.padding * 0.5 : SIZES.padding * 1.5,
    color: COLORS.seaSerpent,
    ...FONTS.body1,
  },

  accountSummaryCircleTextBottom: {
    textAlign: 'center',
    color: COLORS.seaSerpent,
    ...FONTS.body5,
    marginTop: Platform.OS === 'ios' ? SIZES.padding * 0.5 : SIZES.padding * 1,
  },

  // Today Expenses Section
  todayExpensesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 2,
    shadowColor: '#64BFB6',
    shadowOffset: {
      height: 5,
      width: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  todayExpensesWrapper: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderColor: COLORS.textBlue,
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  todayExpensesTextHeader: {
    color: COLORS.monteCarlo,
    textAlign: 'center',
    ...FONTS.body3,
  },

  todayExpensesTextParagraph: {
    color: COLORS.grayColor,
    textAlign: 'center',
    marginTop: SIZES.padding * 0.5,
    ...FONTS.body4,
  },

  // BottomDrawer Section

  bottomDrawerContainer: {
    paddingHorizontal: SIZES.padding * 2,
    marginVertical: SIZES.padding * 1,
    paddingVertical:
      Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 0.2,
    // height: 500,
  },

  // Dashboard Operation Section
  dashboardOperationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding * 0.5,
  },
  dashboardOperationWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOperationIconWrapper: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.darkCyan,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardOperationIcon: {
    width: 30,
    height: 30,
  },
  dashboardOperationText: {
    ...FONTS.body4,
    color: COLORS.white,
    marginVertical: SIZES.padding * 0.9,
  },

  // Accounts Section
  accountGridContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? SIZES.height * 0.94 : SIZES.height * 1,
    width: SIZES.width * 1,
    bottom: 0,
    blurRadius: 1,
    opacity: 0.95,
  },

  accountGridCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.15,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginBottom: SIZES.padding * 2,
  },

  accountGridCardName: {
    color: COLORS.grayColor,
    ...FONTS.body3,
    marginVertical: SIZES.padding * 0.3,
  },
  accountGridCardAmount: {
    ...FONTS.h2,
    color: COLORS.seaSerpent,
    marginVertical: SIZES.padding * 0.3,
  },
  accountGridCardNumber: {
    ...FONTS.body6,
    color: COLORS.grayColor,
    marginVertical: SIZES.padding * 0.3,
  },

  accountGridFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding * 2,
  },
  accountGridFooterImg: {
    width: 20,
    height: 20,
  },

  // CardGrid Section
  cardGridContainer: {
    paddingHorizontal: SIZES.padding * 3,
    flexDirection: 'column',
  },

  cardGridChildWrapper: {
    borderBottomColor: COLORS.grayColor1,
    borderBottomWidth: 0.4,
    marginBottom: SIZES.padding * 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardGridLTRWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  cardGridLTRIcon: {
    width: 52,
    height: 42,
    marginVertical: SIZES.padding * 1,
  },
  cardGridLTRText: {
    marginTop: SIZES.padding * 1,
    marginLeft: SIZES.padding * 0.8,
  },

  cardGridLTRHeader: {
    ...FONTS.body3,
    color: COLORS.grayColor,
  },

  cardGridChildParagraph: {
    ...FONTS.body4,
    color: COLORS.breakerBay,
  },

  cardGridRTLWrapper: {
    marginTop: SIZES.padding * 2,
  },

  cardGridRTLText: {
    ...FONTS.body4,
    color: COLORS.white,
  },

  // Card Operation Modal
  cardOperationModalContainer: {
    height: Platform.OS === 'ios' ? SIZES.height * 0.94 : SIZES.height * 1,
    width: SIZES.width * 1,
    position: 'absolute',
    bottom: 0,
    blurRadius: 1,
    opacity: 0.95,
  },

  cardOperationModalChildWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardOperationModalChild: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.09,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginBottom: SIZES.padding * 2,
  },

  cardOperationModalChildText: {
    color: COLORS.grayColor,
    ...FONTS.h3,
    marginVertical: SIZES.padding * 0.3,
  },
});

const styleSettingsScreen = StyleSheet.create({
  // Profile Section

  profileContainer: {
    flexDirection: 'column',
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical:
      Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 1,
  },

  profileTopTextWrapper: {
    marginTop: SIZES.padding * 1,
    marginBottom: SIZES.padding * 1.5,
  },

  profileTopTextHeader: {
    color: COLORS.grayColor,
    ...FONTS.body3,
  },

  profileBottomWrapper: {
    flexDirection: 'row',
  },

  profileBottomImgHolder: {
    width: 65,
    height: 65,
    marginRight: SIZES.padding * 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.progressProfile,
    borderWidth: 1,
    borderStyle: 'solid',
  },

  profileBottomImg: {
    width: 55,
    height: 55,
  },

  profileBottomTextHolder: {
    marginTop: SIZES.padding * 1.2,
  },

  profileBottomTextFullName: {
    color: COLORS.grayColor,
    ...FONTS.h4,
  },

  profileBottomTextEmailAddress: {
    color: COLORS.grayColor,
    ...FONTS.body4,
  },

  // Profile Navs Section

  profileNavContainer: {
    flexDirection: 'column',
    paddingVertical:
      Platform.OS === 'ios' ? SIZES.padding * 1 : SIZES.padding * 0.2,
    paddingHorizontal: SIZES.padding * 2,
  },

  profileNavHeaderTextWrapper: {
    marginVertical: SIZES.padding * 1,
  },

  profileNavHeaderText: {
    color: COLORS.grayColor,
    ...FONTS.body4,
  },

  profileNavChildWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.padding * 1,
  },

  profileNavChildLTR: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  profileNavChildLTRIconHolder: {
    borderRadius: 20,
    width: 36,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding * 1.5,
  },

  profileNavChildLTRIcon: {
    width: 20,
    height: 20,
  },

  profileNavFirstChildBg: {
    backgroundColor: 'rgba(35, 133, 217, 0.2)',
  },
  profileNavFirstChildTintColor: {
    tintColor: '#2385D9',
  },

  profileNavSecondChildBg: {
    backgroundColor: 'rgba(74, 177, 146, 0.2)',
  },
  profileNavSecondChildTintColor: {
    tintColor: '#4AB192',
  },

  profileNavThirdChildBg: {
    backgroundColor: 'rgba(218, 42, 73, 0.2)',
  },
  profileNavThirdChildTintColor: {
    tintColor: '#DA2A49',
  },

  profileNavFourthChildBg: {
    backgroundColor: 'rgba(215, 180, 0, 0.2)',
  },
  profileNavFourthChildTintColor: {
    tintColor: '#D7B400',
  },

  profileNavFifthChildBg: {
    backgroundColor: 'rgba(35, 133, 217, 0.2)',
  },
  profileNavFifthChildTintColor: {
    tintColor: '#4AB192',
  },

  profileNavSixthChildBg: {
    backgroundColor: 'rgba(255, 94, 169, 0.2)',
  },
  profileNavSixthChildTintColor: {
    tintColor: '#FF5EA9',
  },

  profileNavSeventhChildBg: {
    backgroundColor: 'rgba(229, 118, 105, 0.2)',
  },
  profileNavSeventhChildTintColor: {
    tintColor: '#E57669',
  },

  profileNavEigthChildBg: {
    backgroundColor: 'rgba(34,48,45, 0.2)',
  },
  profileNavEigthChildTintColor: {
    tintColor: '#F3AB61',
  },

  profileNavToggleWrapper: {
    borderRadius: 5,
    width: 34,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileNavChildLTRTextHolder: {
    marginTop: SIZES.padding * 0.5,
  },

  profileNavChildLTRText: {
    ...FONTS.body3,
    color: COLORS.white,
  },

  profileNavChildRTL: {
    backgroundColor: '#0B415B',
    borderRadius: 5,
    width: 34,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileNavChildRTLImg: {
    width: 20,
    height: 20,
  },

  profileAuthLogoutWrapper: {
    marginVertical:
      Platform.OS === 'ios' ? SIZES.padding * 3 : SIZES.padding * 2.5,
    alignSelf: 'center',
  },

  profileAuthLogoutText: {
    color: COLORS.grayColor,
    ...FONTS.body3,
  },
});

export {
  styleGeneral,
  styleWalkThroughScreen,
  styleAuthScreen,
  styleButtons,
  styleFooter,
  styleFormComponents,
  styleTransactionSummary,
  styleBankDashboard,
  styleSettingsScreen,
};
