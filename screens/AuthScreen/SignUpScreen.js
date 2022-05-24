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
import {NewBankForm, SignUpForm} from '../../components/Forms';
import {SectionTitle, HeaderLogo} from '../../components/commons';

const SignUpScreen = () => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <HeaderLogo type="register" />
          <SectionTitle title="Sign Up" subtitle="Personal Information" />
          <SignUpForm />
          {/* <NewBankForm /> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
