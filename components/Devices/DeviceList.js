import React from 'react';
import {View} from 'react-native';
import { RegisteredDevices } from '../../components/commons';
import {HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';

const DeviceList = ({data, id}) => {
    console.log("hello transactionList data", data);
    return (
        <>
         <View style={HomeScreenStyles.transactionListContainer}>
             {(!isEmpty(data)) && data.map((item,index) => { 
                 return (
                    <RegisteredDevices device={item} key={index} />
                 )  
             })}
        </View>
        </>
    )
}

export default DeviceList