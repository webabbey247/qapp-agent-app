import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {SplashScreen} from './screens/LaunchScreen';
import {
  LoginScreen,
  SignUpScreen,
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

const LaunchStack = createStackNavigator();
const LaunchStackScreen = () => {
  return (
    <LaunchStack.Navigator headerMode="none">
      <LaunchStack.Screen name="SplashScreen" component={SplashScreen} />
    </LaunchStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="ForgotPass" component={ForgotPassScreen} />
      <AuthStack.Screen name="ResetPass" component={ResetPassScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bank" component={MyBankScreen} />
      <HomeStack.Screen name="BankInfo" component={MyBankInfoScreen} />
    </HomeStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'LaunchScreen'}>
      <RootStack.Screen name="LaunchScreen" children={LaunchStackScreen} />
      <RootStack.Screen name="AuthScreen" children={AuthStackScreen} />
      <RootStack.Screen name="HomeScreen" children={HomeStackScreen} />
    </RootStack.Navigator>
  );
};

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer theme={theme}>
      <RootStackScreen />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
