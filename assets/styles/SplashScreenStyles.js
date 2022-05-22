import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

const splashScreenStyles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },

  splashWrapper: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 3,
  },

  splashWrapperImgHolder: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  splashImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
});

export default splashScreenStyles;
