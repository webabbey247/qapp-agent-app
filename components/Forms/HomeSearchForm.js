import React from 'react';
import {View, TextInput} from 'react-native';
import {formStyles} from '../../assets/styles';
import {COLORS, SIZES} from '../../constants';
const HomeSearchForm = () => {
  return (
    <>
      <View style={formStyles.homeSearchFormContainer}>
        {/* Search */}
        <View style={{marginTop: SIZES.padding * 0.5}}>
          <TextInput
            style={formStyles.homeSearchTextinput}
            placeholder="Search ...."
            placeholderTextColor={COLORS.textColorOne}
            selectionColor={COLORS.textColorOne}
          />
        </View>
      </View>
    </>
  );
};

export default HomeSearchForm;
