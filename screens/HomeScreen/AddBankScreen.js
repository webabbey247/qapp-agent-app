import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, icons, SIZES } from '../../constants';
import { NewBankForm } from '../../components/Forms';
import { SectionTitle, HeaderLogo } from '../../components/commons';
import { fetchAllBanks } from '../../reducers/Actions/bankAction';



const AddBankScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { banks } = useSelector(state => state.banks)

  console.log("here are banks", banks)

  React.useEffect(() => {
    dispatch(fetchAllBanks());
  }, [fetchAllBanks]);


  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar animated={true} barStyle="light-content" />
        <HeaderLogo navigation={navigation} type='Onboard Bank' />
        <SectionTitle title="Onboard Bank" subtitle="Onboard your preferred banks from the selection below" />
        <NewBankForm  navigation={navigation} bankData={banks} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddBankScreen;
