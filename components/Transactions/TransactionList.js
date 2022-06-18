import React from 'react'
import {View} from 'react-native';
import { TransactionCard } from '../commons';
import {HomeScreenStyles } from '../../assets/styles';
import { isEmpty } from 'lodash';
const TransactionList = ({data, id}) => {
  return (
    <>
     <View style={HomeScreenStyles.transactionListContainer}>
     {(!isEmpty(data)) && data.map((item,index) => { 
                 return (
                  <TransactionCard />
                    // <RegisteredDevices device={item} key={index} />
                 )  
             })}
                
                {/* <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard /> */}
             </View>
    </>
  )
}

export default TransactionList