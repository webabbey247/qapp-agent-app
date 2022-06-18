import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { BankCardGrid } from '../commons';
import { HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';


const ApprovedBanks = ({ bank, navigation }) => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} horizontal={true}>
          {isEmpty(bank) && (
            <View style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}>
              <Text>No Approved Entries Found</Text>
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

export default ApprovedBanks