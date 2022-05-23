/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  typographyStyles,
  globalStyles,
  HomeScreenStyles,
  buttonStyles,
} from '../../assets/styles';
import {COLORS, icons, SIZES} from '../../constants';
import {OptionTabs, BankCardGrid} from '../../components/commons';

const MyBankScreen = ({navigation}) => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.padding * 1,
            paddingVertical:
              Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 1,
            backgroundColor: COLORS.deepBlue,
            marginBottom: SIZES.padding * 2,
            marginTop: SIZES.padding * 1,
          }}>
          <View style={globalStyles.headerImgHolder}>
            <Image
              source={icons.chevronLeft}
              resizeMode="contain"
              style={globalStyles.headerImg}
            />
          </View>
          <View
            style={{
              marginLeft: SIZES.padding * 3,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                lineHeight: 20,
                marginTop: SIZES.padding * 1,
              }}>
              My Banks
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View
            style={[
              HomeScreenStyles.bankCardContainer,
              {
                flexDirection: 'column',
                marginVertical: SIZES.padding * 0.3,
              },
            ]}>
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
            <BankCardGrid type="list" />
          </View>
        </ScrollView>

        <View style={buttonStyles.addBankWrapper}>
          <TouchableOpacity style={buttonStyles.defaultButton}>
            <Text style={typographyStyles.defaultButtonText}>Add new bank</Text>
          </TouchableOpacity>
        </View>
        <OptionTabs type="banks" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyBankScreen;
