/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import {useNavigation} from '@react-navigation/native';


const BankCardGrid = ({type}) => {
    const navigation = useNavigation();
    return (
        <>
        {type === 'list' ? (
             <TouchableOpacity
             onPress={() => navigation.navigate('BankInfo')}
             style={styles.bankListCard}>
             <View style={{
                 display: 'flex',
                 flexDirection: 'row',
             }}>
                 <View>
                     <Image
                         source={images.bankOne}
                         resizeMode="contain"
                         style={[styles.bankGridCardImg, {
                             height: 50,
                             width: 50,
                             marginTop: SIZES.padding * 2,
                         }]}
                     />
                 </View>
                 <View
                     style={[styles.bankGridtext, {
                         marginLeft: SIZES.padding * 3,
                     }]}>
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
                 style={[styles.bankGridCtaWrapper, {
                     marginTop: SIZES.padding * 2,
                     height: 45,
                     paddingHorizontal: SIZES.padding * 3,
                 }]}>
                 <Text
                     style={styles.bankGridCta}>
                     Details
                 </Text>
             </View>
         </TouchableOpacity>
        ) : (
            <TouchableOpacity
            onPress={() => navigation.navigate('BankInfo')}
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
        </TouchableOpacity>
        )}
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

    bankListCard: {
        backgroundColor: '#123D51',
        borderRadius: 8,
        borderColor: 'rgba(244, 244, 244, 0.4)',
        borderWidth: 0.3,
        borderStyle: 'solid',
        paddingVertical: SIZES.padding * 0.5,
        paddingHorizontal: SIZES.padding * 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: SIZES.padding * 1.5,
        marginBottom: SIZES.padding * 1.5,
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
