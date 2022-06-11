import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { BankCardGrid } from '../commons';
import { HomeScreenStyles } from '../../assets/styles';
import { bankData } from '../../utils/DummyData';
export const GridBankCard = ({navigation}) => {
    return (
        <>
            <View style={HomeScreenStyles.subSectionContainer}>
                <View>
                    <Text style={HomeScreenStyles.subSectionLTR}>Active Banks</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Bank')}
                    style={HomeScreenStyles.subSectionRTLWrapper}>
                    <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: "center" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={HomeScreenStyles.bankCardContainer}>
                        <BankCardGrid type="grid" />
                        <BankCardGrid type="grid" />
                        <BankCardGrid type="grid" />
                        <BankCardGrid type="grid" />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
