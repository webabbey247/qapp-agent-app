/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {COLORS, icons} from '../../constants';
import {LoginForm} from '../../components/Forms';
import {SectionTitle, HeaderLogo} from '../../components/commons';
const LoginScreen = () => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <HeaderLogo type="general" />
          <SectionTitle title="Sign in" subtitle="Welcome!" />
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
