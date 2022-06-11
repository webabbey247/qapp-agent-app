import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import { bankData } from '../../utils/DummyData';
const NewBankForm = () => {
  const [bank, setBank] = useState(bankData);

  // const 
  // const newBank = bank.concat({ "selected": false })
  // console.log("Hello Bank", newBank);

  console.log("selected banks", bank)
  const onSelectBank = (item) => {
    const newItem = bank.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected }
      } else {
        return val;
      }
    })
    setBank(newItem)
  }

  const selectedBanks = bank.filter(val => val.selected, true);
  console.log("selected bank",selectedBanks)

  return (
    <>
      <View style={{
        flex: 1,
        marginTop: SIZES.padding * 3,
        paddingHorizontal: SIZES.padding * 2,
      }}>
        <FlatList
          data={bank}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => onSelectBank(item)} style={{
                paddingVertical: SIZES.padding * 2,
                backgroundColor: item.selected ? COLORS.breakerBay : COLORS.buttonBgColor,
                marginVertical: SIZES.padding * 1,
              }}>
                <Text style={{
                  textAlign: 'center',
                  fontSize: 14,
                  lineHeight: 18,
                }}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </>
  );
};

export default NewBankForm;
