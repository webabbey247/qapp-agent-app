import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  HomeScreenStyles,
} from '../../assets/styles';

const SectionTitle = ({typeUrl, title, navigation}) => {
  return (
    <>
     <View style={HomeScreenStyles.subSectionContainer}>
                <View>
                    <Text style={HomeScreenStyles.subSectionLTR}>{title}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(`${typeUrl}`)}
                    style={HomeScreenStyles.subSectionRTLWrapper}>
                    <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
                </TouchableOpacity>
            </View>
    </>
  )
}

export default SectionTitle