import React, { useState } from 'react'
import {
  View,
  Image,
  ScrollView,
  Text
} from 'react-native';
import { HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';
import { BankCardGrid } from '../commons';
import { COLORS, images } from '../../constants';

const ActiveBanks = ({ bank, navigation }) => {
  console.log("banks")
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} horizontal={true}>

       {isEmpty(bank) && (
         <View style={{
           flex: 1,
           display: "flex",
           justifyContent:"center",
           alignItems: "center",
           height: "100%"
         }}>
           <Text>No Active Entries Found</Text>
         </View>
       )}
          <View style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
              alignItems: "center",
              width:"100%"
          }}>
            {!isEmpty(bank) && bank.map((item, index) => {
              return (

                <BankCardGrid navigation={navigation} data={item} key={index} type="list" />

              )
            })}
          </View>
        </ScrollView>
      </View>

    </>
  )
}

export default ActiveBanks