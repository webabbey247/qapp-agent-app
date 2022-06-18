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


const BankCardGrid = ({type, data, id}) => {
    const navigation = useNavigation();
    return (
       <>
       {type === 'list' ? (
         <TouchableOpacity key={id}
             onPress={() => navigation.navigate("BankInfo", {
                 account: data,
             })}
             style={styles.bankListCard}>
             <View style={{
                 display: 'flex',
                 flexDirection: 'row',
             }}>
                 <View>
                     <Image
                         source={data.logoUrl ? data.logoUrl : images.bankOne}
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
                         {data.bankName}
                     </Text>
                     <Text
                         style={styles.bankGridDevices}>
                        {data.totalDevices ? data.totalDevices : "0"} {data.totalDevices > 1 ? "Devices" : "Device"}
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
        )  : (
            <TouchableOpacity key={id}
             onPress={() => navigation.navigate("BankInfo", {
                 account: data,
             })}
            style={styles.bankGridCard}>
            <View>
                <View>
                 
                   
                    <Image
                         source={data.logoUrl ? data.logoUrl : images.bankOne}
                         resizeMode="contain"
                        style={styles.bankGridCardImg}
                    />
                </View>
                <View
                    style={styles.bankGridtext}>
                    <Text
                        style={styles.bankGridName}>
                       {data.bankName}
                    </Text>
                    <Text
                        style={styles.bankGridDevices}>
                         {data.totalDevices ? data.totalDevices : "0"} {data.totalDevices > 1 ? "Devices" : "Device"}
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
}

   

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
        width: 130,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight: SIZES.padding * 1.5,
     },

    bankListCard: {
        backgroundColor: '#123D51',
        borderRadius: 8,
        borderColor: 'rgba(244, 244, 244, 0.4)',
        borderWidth: 0.3,
        borderStyle: 'solid',
        paddingVertical: SIZES.padding * 0.5,
        paddingHorizontal: SIZES.padding * 2,
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row',
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
