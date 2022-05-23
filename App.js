import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {SplashScreen} from './screens/LaunchScreen';
import {
  LoginScreen,
  ForgotPassScreen,
  ResetPassScreen,
} from './screens/AuthScreen';

import {HomeScreen, MyBankScreen, MyBankInfoScreen} from './screens/HomeScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

// Launch Stack  //
const LaunchStack = createStackNavigator();
const LaunchStackScreen = () => {
  return (
    <LaunchStack.Navigator headerMode="none" initialRouteName={'SplashScreen'}>
      <LaunchStack.Screen name="SplashScreen" component={SplashScreen} />
    </LaunchStack.Navigator>
  );
};

//Auth Stack  //
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName={'ForgotPass'}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPassScreen} />
      <AuthStack.Screen name="ResetPass" component={ResetPassScreen} />
    </AuthStack.Navigator>
  );
};

//Home Stack  //
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none" initialRouteName={'Bank'}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bank" component={MyBankScreen} />
      <HomeStack.Screen name="BankInfo" component={MyBankInfoScreen} />
    </HomeStack.Navigator>
  );
};

// Root Stack //
const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeScreen'}>
      <RootStack.Screen name="LaunchScreen" children={LaunchStackScreen} />
      <RootStack.Screen name="AuthScreen" children={AuthStackScreen} />
      <RootStack.Screen name="HomeScreen" children={HomeStackScreen} />
    </RootStack.Navigator>
  );
};

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
