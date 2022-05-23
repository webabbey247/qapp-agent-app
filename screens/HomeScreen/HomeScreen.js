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
} from '../../assets/styles';
import {COLORS, icons} from '../../constants';
import {HomeSearchForm} from '../../components/Forms';
import {
  HeaderLogo,
  BankCardGrid,
  TransactionCard,
} from '../../components/commons';

const HomeScreen = () => {
  const [searchForm, setSearchForm] = React.useState(false);

  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <HeaderLogo type="home" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={globalStyles.headerSearchContainer}>
            <View>
              <Text style={typographyStyles.textHeading}>Good Morning</Text>
              <Text style={typographyStyles.textParagraph}>
                Welcome, Michael
              </Text>
            </View>
            <TouchableOpacity onPress={() => setSearchForm(!searchForm)}>
              <Image
                source={icons.searchIcon}
                resizeMode="contain"
                style={globalStyles.headerSearchicon}
              />
            </TouchableOpacity>
          </View>

          {searchForm && <HomeSearchForm />}

          <View style={HomeScreenStyles.subSectionContainer}>
            <View>
              <Text style={HomeScreenStyles.subSectionLTR}>Active Banks</Text>
            </View>
            <View style={HomeScreenStyles.subSectionRTLWrapper}>
              <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
            </View>
          </View>

          <View style={HomeScreenStyles.bankCardContainer}>
            <BankCardGrid />
            <BankCardGrid />
            <BankCardGrid />
          </View>

          <View style={HomeScreenStyles.subSectionContainer}>
            <View>
              <Text style={HomeScreenStyles.subSectionLTR}>
                Transaction History
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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
