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
import {globalStyles, HomeScreenStyles} from '../../assets/styles';
import {COLORS, icons, SIZES} from '../../constants';
import {
  OptionTabs,
  TransactionCard,
  RegisteredDevices,
} from '../../components/commons';

const MyBankInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Bank')}
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
                marginTop: SIZES.padding * 0.5,
              }}>
              Oceanic Bank
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={HomeScreenStyles.transactionListContainer}>
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <TransactionCard />
            <RegisteredDevices />
            <RegisteredDevices />
            <RegisteredDevices />
            <RegisteredDevices />
          </View>
        </ScrollView>
        <OptionTabs type="history" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyBankInfoScreen;
