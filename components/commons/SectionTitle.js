import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles, typographyStyles} from '../../assets/styles';

const SectionTitle = ({title, subtitle}) => {
  return (
    <>
      <View style={globalStyles.sectionWrapper}>
        <Text style={typographyStyles.textHeading}>{title}</Text>
        <Text style={typographyStyles.textParagraph}>{subtitle}</Text>
      </View>
    </>
  );
};

export default SectionTitle;
