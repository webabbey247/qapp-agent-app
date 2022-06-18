import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {COLORS, icons} from '../../constants';
import {NewBankForm} from '../../components/Forms';
import {SectionTitle, HeaderLogo} from '../../components/commons';


const OnboardBanks = () => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <HeaderLogo type="general" />
          <SectionTitle title="Sign in" subtitle="Hello Paragraphy" />
          <NewBankForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OnboardBanks;
