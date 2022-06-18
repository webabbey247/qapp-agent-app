import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {COLORS, images, SIZES} from '../../constants';
import NumberFormat from 'react-number-format';

const AccountProfile = ({data}) => {
  return (
    <>
      <View style={styles.bankListCard}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={data.logoUrl ? data.logoUrl : images.bankOne}
            resizeMode="contain"
            style={styles.bankGridCardImg}
          />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={styles.bankGridtext}>
            <Text style={styles.bankGridDevices}>Account Name</Text>
            <Text style={styles.bankGridName}>{data.accountName ? data.accountName : "N/A"}</Text>
          </View>
          <View style={styles.bankGridtext}>
            <Text style={styles.bankGridDevices}>Account Number</Text>
            <Text style={styles.bankGridName}>{data.accountNumber ? data.accountNumber : "N/A"}</Text>
          </View>
          <View style={styles.bankGridtext}>
            <Text style={styles.bankGridDevices}>Account Balance</Text>
            <NumberFormat
                value= {data.balance ? data.balance : 0}
                displayType="text"
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
                prefix={"N"}
                renderText={(value) =>  <Text style={styles.bankGridName}>{`${value}`}</Text>} />
          </View>
        </View>
      </View>
    </>
  );
};

export default AccountProfile;

const styles = StyleSheet.create({
  bankListCard: {
    backgroundColor: '#123D51',
    borderRadius: 8,
    borderColor: 'rgba(244, 244, 244, 0.4)',
    borderWidth: 0.3,
    borderStyle: 'solid',
    paddingTop: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginRight: SIZES.padding * 1.5,
    marginBottom: SIZES.padding * 1.5,
  },

  bankGridCardImg: {
    width: 45,
    height: 45,
  },
  bankGridtext: {
    marginVertical: SIZES.padding * 2,
    display: 'flex',
    flexDirection: 'column',
  },
  bankGridName: {
    color: COLORS.borderColor,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'left',
  },
  bankGridDevices: {
    color: COLORS.textColorOne,
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    textAlign: 'left',
  },
});
