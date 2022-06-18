import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, SafeAreaView, StatusBar, Platform, Image, ActivityIndicator } from 'react-native';
import { images, COLORS } from '../../constants';
import { splashScreenStyles } from '../../assets/styles';
import { useSelector } from 'react-redux';

const SplashScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  // check if user is logged
  const userToken = async () => {
    try {
      setLoading(true)
      const token = await AsyncStorage.getItem('userAuthToken')
      console.log("Token availability checker", token)
          token ? (
          setTimeout(() => {
            navigation.navigate('HomeScreen', {
              screen: 'Home',
              token: token ? token : ""
            });
          }, 4000)
        ) : (
          setTimeout(() => {
            navigation.navigate('AuthScreen', {
              screen: 'Login',
              token: token ? token : ""
            });
          }, 4000)
        )
    }
    catch (e) {
      console.log(`Token error issues ${e}`);
    }finally{
      setLoading(false)
    }
  }

  React.useEffect(() => {
    userToken()
  },[]);


  if(loading) {
      return (
          <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
        <ActivityIndicator size={"large"} />
      </View>
      )

    }


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
      style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
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
