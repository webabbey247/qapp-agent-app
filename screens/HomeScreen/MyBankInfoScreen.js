import React, {useEffect} from 'react';
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
import { COLORS, SIZES } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  OptionTabs,
  AccountProfile,
} from '../../components/commons';
import DeviceList from '../../components/Devices/DeviceList';
import TransactionList from '../../components/Transactions/TransactionList';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import { fetchAllDevice } from '../../reducers/Actions/devicesAction';
import { fetchAllTransactions } from '../../reducers/Actions/transactionAction';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const MyBankInfoScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [history, setHistory] = React.useState(0);  
  const { account } = route.params;
  const { deviceList } = useSelector(state => state.devices)
  const {transactionList} = useSelector(state => state.transactions)
  // console.log("hey route", route);
  // console.log("hey route device list", deviceList);
  // console.log("hey route traanction list no", transactionList);

  React.useEffect(() => {
    dispatch(fetchAllDevice(account.accountId));
    dispatch(fetchAllTransactions);
  }, [fetchAllDevice, fetchAllTransactions]);


  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: COLORS.bgColor }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <StatusBar animated={true} barStyle="light-content" />

        <CustomHeader navigation={navigation} title={account.bankName} typeUrl="Bank" />

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: SIZES.padding * 2,
            }}>
            <AccountProfile data={account} />
          </View>

          {account.accountStatus === "Active" && (
            history === 0 ? (
              <>
              {transactionList.length >= 1 && <SectionTitle  navigation={navigation} title="Transaction History" typeUrl="Transaction" />  }
               <TransactionList data={transactionList} />
              </>
            ) : (
              <>
                {deviceList.length >= 1 &&  <SectionTitle  navigation={navigation} title="Registered Devices" typeUrl="DeviceHistory" />  }
              <DeviceList data={deviceList} />       
              </>
            )
          )}
        </ScrollView>
        <OptionTabs type="history" setHistory={setHistory} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MyBankInfoScreen;
