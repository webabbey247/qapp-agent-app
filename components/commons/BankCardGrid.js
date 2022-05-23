/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { COLORS, images, SIZES } from '../../constants';

const BankCardGrid = () => {
    return (
        <>
            <View
                style={styles.bankGridCard}>
                <View>
                    <View>
                        <Image
                            source={images.bankOne}
                            resizeMode="contain"
                            style={styles.bankGridCardImg}
                        />
                    </View>
                    <View
                        style={styles.bankGridtext}>
                        <Text
                            style={styles.bankGridName}>
                            Oceanic
                        </Text>
                        <Text
                            style={styles.bankGridDevices}>
                            10 Devices
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.bankGridCtaWrapper}>
                    <Text
                        style={styles.bankGridCta}>
                        Details
                    </Text>
                </View>
            </View>
        </>
    );
};

export default BankCardGrid;


const styles = StyleSheet.create({

    bankGridCard: {
        backgroundColor: '#123D51',
        borderRadius: 8,
        borderColor: 'rgba(244, 244, 244, 0.4)',
        borderWidth: 0.3,
        borderStyle: 'solid',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 1,
        width: 124,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding * 1.5,
    },
    bankGridCardImg: {
        width: 60,
        height: 60,
    },
    bankGridtext: {
        marginVertical: SIZES.padding * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bankGridName: {
        color: COLORS.borderColor,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
    },
    bankGridDevices: {
        color: COLORS.textColorOne,
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 20,
    },

    bankGridCtaWrapper: {
        backgroundColor: COLORS.grayColor,
        paddingVertical: SIZES.padding * 1,
        paddingHorizontal: SIZES.padding * 2,
        borderRadius: 4,
    },

    bankGridCta: {
        color: COLORS.bgColor,
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 20,
    },

});
