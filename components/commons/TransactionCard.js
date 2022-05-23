import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const TransactionCard = () => {
  return (
    <View style={styles.transactionCardList}>
      <View>
        <Text style={styles.transactionCardDesc}>Deposit for Jane Doe</Text>
        <Text style={styles.transactionCardBank}>Diamond Bank</Text>
      </View>
      <View>
        <Text style={styles.transactionCardAmount}>N25,300</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  transactionCardList: {
    backgroundColor: '#123D51',
    borderRadius: 8,
    borderColor: 'rgba(244, 244, 244, 0.4)',
    borderWidth: 0.3,
    borderStyle: 'solid',
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: SIZES.padding * 1,
  },

  transactionCardDesc: {
    color: COLORS.borderColor,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },

  transactionCardBank: {
    color: COLORS.textColorOne,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },

  transactionCardAmount: {
    color: COLORS.borderColor,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
  },
});
