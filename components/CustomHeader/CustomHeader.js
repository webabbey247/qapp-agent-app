import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {
    globalStyles,
  } from '../../assets/styles';
import {COLORS, icons, SIZES} from '../../constants';

const CustomHeader = ({typeUrl, title, navigation}) => {
  return (
    <>
      <TouchableOpacity
           onPress={() => navigation.navigate(`${typeUrl}`)}
          style={styles.CustomHeaderContainer}>
          <View style={globalStyles.headerImgHolder}>
            <Image
              source={icons.chevronLeft}
              resizeMode="contain"
              style={globalStyles.headerImg}
            />
          </View>
          <View
            style={{
              marginLeft: SIZES.padding * 2,
            }}>
            <Text
              style={styles.CustomHeaderText}>
             {title}
            </Text>
          </View>
        </TouchableOpacity>
    </>
  )
}

export default CustomHeader

const styles = StyleSheet.create({

    CustomHeaderContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 1,
        paddingVertical:
          Platform.OS === 'ios' ? SIZES.padding * 1.2 : SIZES.padding * 1,
        backgroundColor: COLORS.deepBlue,
        marginBottom: SIZES.padding * 2,
        marginTop: SIZES.padding * 1,
    },

    CustomHeaderText: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 20,
        marginTop: SIZES.padding * 1,
    }


  });