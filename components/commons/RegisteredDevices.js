import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const RegisteredDevices = () => {
  return (
    <View style={styles.registeredDeviceList}>
      <View>
        <Text style={styles.registeredDeviceDesc}>POS Machine 1</Text>
        <Text style={styles.registeredDeviceBank}>
          IMEI: 565661165316511JK46
        </Text>
      </View>
      <View style={styles.registeredDeviceCta}>
        <Text style={styles.registeredDeviceCtaText}>View</Text>
      </View>
    </View>
  );
};

export default RegisteredDevices;

const styles = StyleSheet.create({
  registeredDeviceList: {
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

  registeredDeviceDesc: {
    color: COLORS.borderColor,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },

  registeredDeviceBank: {
    color: COLORS.textColorOne,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },

  registeredDeviceCta: {
    backgroundColor: COLORS.transparent,
    paddingVertical: SIZES.padding * 1,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: 4,
    borderColor: 'rgba(244, 244, 244, 0.4)',
    borderWidth: 0.3,
    borderStyle: 'solid',
  },

  registeredDeviceCtaText: {
    color: COLORS.borderColor,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 20,
  },
});
