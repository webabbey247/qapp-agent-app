/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, StatusBar, Platform, Image} from 'react-native';
import {images, COLORS} from '../../constants';
import {splashScreenStyles} from '../../assets/styles';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    }, 4000);
  });

  const renderSplashLogo = (
    <View style={splashScreenStyles.splashWrapper}>
      <View style={splashScreenStyles.splashWrapperImgHolder}>
        <Image
          source={images.qappLogo}
          resizeMode="contain"
          style={splashScreenStyles.splashImg}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor={Platform.OS === 'ios' ? null : COLORS.bgColor}
      />
      <View style={splashScreenStyles.splashContainer}>{renderSplashLogo}</View>
    </SafeAreaView>
  );
};

export default SplashScreen;
