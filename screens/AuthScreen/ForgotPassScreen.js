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
import {ForgotPasswordForm} from '../../components/Forms';
import {SectionTitle, HeaderLogo} from '../../components/commons';
const ForgotPassScreen = ({navigation}) => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <HeaderLogo navigation={navigation} type='other' />
          <SectionTitle title="Forgot Password" subtitle="Enter your registered email address" />
          <ForgotPasswordForm navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassScreen;
