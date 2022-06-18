import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  HomeScreenStyles,
  buttonStyles,
} from '../../assets/styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS, SIZES } from '../../constants';
import { OptionTabs, BankCardGrid } from '../../components/commons';
import { ActiveBanks, ApprovedBanks, PendingBanks, InactiveBanks } from '../../components/BankCards';
import { fetchActiveBanks, fetchPendingBanks, fetchApprovedBanks } from '../../reducers/Actions/bankAction';


const MyBankScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [displayBank, setDisplayBank] = useState(1);
  const { activeBankList, pendingBankList, approvedBankList } = useSelector(state => state.banks)

  // const activeBanks = activeBankList
  // const pendingBankz = pendingBankList
  console.log("checking active bank status", activeBankList)
  console.log("checking pending back status", pendingBankList)
  console.log("checking pending back status", approvedBankList)

  React.useEffect(() => {
    dispatch(fetchActiveBanks());
    dispatch(fetchPendingBanks());
    dispatch(fetchApprovedBanks());
  }, [fetchActiveBanks, fetchApprovedBanks, fetchPendingBanks]);



  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar animated={true} barStyle="light-content" />

        <CustomHeader navigation={navigation} title="My Banks" typeUrl="Home" />

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View
            style={[
              HomeScreenStyles.bankCardContainer,
              {
                flexDirection: 'column',
                marginVertical: SIZES.padding * 0.3,
              },
            ]}>

            {displayBank === 1 && (
              <ActiveBanks navigation={navigation} bank={activeBankList} />
            )}

            {displayBank === 2 && (
              <ApprovedBanks navigation={navigation} bank={approvedBankList} />
            )}


            {displayBank === 3 && (
              <PendingBanks navigation={navigation} bank={pendingBankList} />
            )}


            {/* 

           
            {displayBank === 4 && (
              <InactiveBanks navigation={navigation} token={user.jwt} />
            )} */}

            {/* <BankCardGrid type="list" /> */}
          </View>
        </ScrollView>

        <View style={buttonStyles.addBankWrapper}>
          <TouchableOpacity style={buttonStyles.defaultButton} onPress={() => navigation.navigate("AddBank")}>
            <Text style={typographyStyles.defaultButtonText}>Add new bank</Text>
          </TouchableOpacity>
        </View>
        <OptionTabs setDisplayBank={setDisplayBank} type="banks" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyBankScreen;
