import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getApprovedBank, reset } from '../../features/main/mainSlice';
import { BankCardGrid } from '../commons';
import { HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';


const InactiveBanks = () => {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={HomeScreenStyles.bankCardContainer}>
            <Text>Hello Approved Banks</Text>
            {/* {!isEmpty(bank) && bank.map((item, index) => {
                            return (
                                <BankCardGrid data={item} id={index} type="grid" />
                            )
                        })} */}
          </View>
        </ScrollView>
      </View>

    </>
  )
}

export default InactiveBanks