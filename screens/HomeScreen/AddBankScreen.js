/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  FlatList,
SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  typographyStyles,
  globalStyles,
  HomeScreenStyles,
  buttonStyles,
} from '../../assets/styles';
import { useDispatch, useSelector } from 'react-redux';
import {COLORS, icons, SIZES} from '../../constants';
import { NewBankForm } from '../../components/Forms';


const AddBankScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [allAccount, setAllAccount] = useState(['']);
    const {getBankPayload, isError, isSuccess} = useSelector((state) => state.agents)
console.log("All agent Account checker", allAccount);

    React.useEffect(() => {
        if (isError) {
            SnackAlert.show(getBankPayload.message ? getBankPayload.message : "");
            console.log("isError messages");
        }
        if(getBankPayload !== ""){
        if(isSuccess) {
            setAllAccount(getBankPayload.result)
            AsyncStorage.setItem('accountDump', JSON.stringify(getBankPayload.result))
        }
           
        } else {
            dispatch(getBankPayload())
        }
      }, [dispatch])
  
//   useEffect(() => {
//     if (isError) {
//       console.log("Eror has occurred");
//   }
//   if (!isEmpty(accountData)) {
//       if (isSuccess) {
//           const accounts = accountData.result
//           if (!isEmpty(accounts)) {
//               setAllAccount(accounts)
//               AccountUtil.setAccount(accounts)
//           }
//       }
//   } 
//   else {
//       dispatch(getAccount());
//   }
//   }, [getAccount]);


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
                marginTop: SIZES.padding * 1,
              }}>
             Add New Bank
            </Text>
          </View>
        </TouchableOpacity>

        <NewBankForm date={allAccount} />
        {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        </ScrollView> */}
        <View style={buttonStyles.addBankWrapper}>
          <TouchableOpacity style={buttonStyles.defaultButton} onPress={() => navigation.navigate("AddBank")}>
            <Text style={typographyStyles.defaultButtonText}>Add Bank</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddBankScreen;
