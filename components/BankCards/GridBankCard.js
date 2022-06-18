import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { BankCardGrid } from '../commons';
import { HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActiveBanks } from '../../reducers/Actions/bankAction';

export const GridBankCard = ({ navigation }) => {
    const dispatch = useDispatch();
    const { activeBankList } = useSelector(state => state.banks)

    React.useEffect(() => {
        dispatch(fetchActiveBanks());
    }, [fetchActiveBanks]);


    return (
        <>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={HomeScreenStyles.bankCardContainer}>

                        {isEmpty(activeBankList) && (
                            <View style={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%"
                            }}>
                                <Text>No Active Entries Found</Text>
                            </View>
                        )}


                        {!isEmpty(activeBankList) && activeBankList.map((item, index) => {
                            return (
                                <BankCardGrid data={item} id={index} type="grid" />
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
