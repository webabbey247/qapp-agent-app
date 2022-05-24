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
  AccountProfile,
} from '../../components/commons';

const MyBankInfoScreen = ({navigation}) => {
  const [history, setHistory] = React.useState(0);

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
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2,
            }}>
            <AccountProfile />
          </View>

          {history === 0 ? (
            <>
              <View style={HomeScreenStyles.subSectionContainer}>
                <View>
                  <Text style={HomeScreenStyles.subSectionLTR}>
                    Recent History
                  </Text>
                </View>
                <View style={HomeScreenStyles.subSectionRTLWrapper}>
                  <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
                </View>
              </View>
              <View style={HomeScreenStyles.transactionListContainer}>
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
              </View>
            </>
          ) : (
            <>
              <View style={HomeScreenStyles.subSectionContainer}>
                <View>
                  <Text style={HomeScreenStyles.subSectionLTR}>
                    Registered Devices
                  </Text>
                </View>
                <View style={HomeScreenStyles.subSectionRTLWrapper}>
                  <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
                </View>
              </View>
              <View style={HomeScreenStyles.transactionListContainer}>
                <RegisteredDevices />
                <RegisteredDevices />
                <RegisteredDevices />
                <RegisteredDevices />
              </View>
            </>
          )}
        </ScrollView>
        <OptionTabs type="history" setHistory={setHistory} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyBankInfoScreen;
