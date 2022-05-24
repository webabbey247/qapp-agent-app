/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {COLORS, images, SIZES} from '../../constants';

const AccountProfile = () => {
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
            source={images.bankOne}
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
            <Text style={styles.bankGridName}>Balogun Abiodun</Text>
          </View>
          <View style={styles.bankGridtext}>
            <Text style={styles.bankGridDevices}>Account Number</Text>
            <Text style={styles.bankGridName}>3001254683</Text>
          </View>
          <View style={styles.bankGridtext}>
            <Text style={styles.bankGridDevices}>Account Balance</Text>
            <Text style={styles.bankGridName}>N32,000,000.00</Text>
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
