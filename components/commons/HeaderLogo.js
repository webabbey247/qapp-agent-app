/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../assets/styles';
import {images, icons, SIZES} from '../../constants';

const HeaderLogo = ({navigation, type}) => {
  return (
    <>
      {type === 'register' && (
        <View style={globalStyles.headerLogoContainer}>
          <Image
            source={images.qappLogo}
            resizeMode="contain"
            style={[
              globalStyles.headerLogoImg,
              {
                height: 130,
                width: 100,
              },
            ]}
          />
        </View>
      )}

      {type === 'general' && (
        <View style={globalStyles.headerLogoContainer}>
          <Image
            source={images.qappLogo}
            resizeMode="contain"
            style={globalStyles.headerLogoImg}
          />
        </View>
      )}

      {type === 'other' && (
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={globalStyles.headerContainer}>
          <View style={globalStyles.headerImgHolder}>
            <Image
              source={icons.chevronLeft}
              resizeMode="contain"
              style={globalStyles.headerImg}
            />
          </View>
        </TouchableOpacity>
      )}

      {type === 'home' && (
        <View style={globalStyles.homeHeaderContainer}>
          <View>
            <Image
              source={icons.menuIcon}
              resizeMode="contain"
              style={globalStyles.headerMenuIcon}
            />
          </View>
          <View>
            <Image
              source={images.profileImg}
              resizeMode="contain"
              style={globalStyles.headerProfileImg}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default HeaderLogo;
