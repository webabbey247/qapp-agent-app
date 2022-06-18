import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import { MultiSelect } from 'react-native-element-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { PlusCircle, Trash } from 'react-native-feather';
import {
  typographyStyles,
  buttonStyles,
} from '../../assets/styles';
import { onboardBank } from '../../api/bankApi';
import { postOnboardBankSuccess, postOnboardBankFail, postOnboardBankPending } from '../../reducers/Slice/bankSlice';
import { SnackAlert } from '../../utils/SnackAlert';
import {Errors,  Messages } from '../../utils/Messages';


const NewBankForm = ({ navigation, bankData }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const {isOnboarded, error, isLoading} = useSelector((state) => state.banks)

  const bankInfo = selected;
  console.log("selected banks", bankInfo)



  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        <PlusCircle style={styles.icon} color="white" size={20} />
      </View>
    );
  };


  const handleOnboardBank = async() => {

    const onboardInfo = {
      banks_id: bankInfo
    };
    console.log("helo log info", onboardInfo)

    dispatch(postOnboardBankPending());

    try {
      const onBoarded = await onboardBank(onboardInfo);
      console.log("hello onboarded banks", onBoarded);


      NetInfo.fetch().then((state) => {
        if (state.isConnected) {

          if (onBoarded.success === false) {
            SnackAlert.show(onBoarded.message ? onBoarded.message : "");
            console.log("server handshake with error response", onBoarded.message ? onBoarded.message : "");
            return dispatch(postOnboardBankFail(onBoarded.message ? onBoarded.message : ""));
          }

          if (onBoarded.success === true) {
                dispatch(postOnboardBankSuccess());
              console.log("..........", onBoarded.message)  
             if(isOnboarded){
              SnackAlert.show(onBoarded.message ? onBoarded.message : "");
              setTimeout(() => {
                navigation.navigate('Bank');
              }, 500);
            } 
            console.log("you have successfulled onboarded a bank");
          }
        } else if (isRendered.current) {
          Display.show(Errors.Internet);
        }
      });
    } catch (e) {
      dispatch(postOnboardBankFail(error.message));
      SnackAlert.show(error.message ? error.message : "");
      console.log("no server handshake", error.message)
    }
  }


  return (
    <>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{
        flex: 1,
        marginTop: SIZES.padding * 3,
        paddingHorizontal: SIZES.padding * 2,
      }}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={bankData.map(({bankId, bankName}) => 
          ({label:bankName, value:bankId})
          )}
          labelField="label"
          valueField="value"
          placeholder="Select Preferred Bank"
          value={selected}
          search
          searchPlaceholder="Search..."
          onChange={item => {
            setSelected(item);
          }}
          renderItem={renderDataItem}

          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                <Trash color="white" size={10} />
              </View>
            </TouchableOpacity>

          )} />
      </View>
      </ScrollView>
     
      <View  style={buttonStyles.addBankWrapper}>
        <TouchableOpacity onPress={handleOnboardBank} style={buttonStyles.defaultButton}>
          <Text style={typographyStyles.defaultButtonText}>{isLoading ? "Onboarding......" : "Add Bank"}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NewBankForm;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: SIZES.padding * 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  placeholderStyle: {
    fontSize: 14,
    textAlign: "center",
    letterSpacing: 0.8,
  },

  selectedTextStyle: {
    fontSize: 14,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  icon: {
    marginRight: 5,
  },

  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
  },

  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.deepOrange,
    shadowColor: '#000',
    marginTop: SIZES.padding * 2,
    marginRight: 12,
    paddingHorizontal: SIZES.padding * 2.5,
    paddingVertical: SIZES.padding * 0.8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  textSelectedStyle: {
    marginRight: SIZES.padding * 1.5,
    fontSize: 16,
    lineHeight: 21,

  },

});

