import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import formStyles from '../../assets/styles/FormStyles';

const CustomTextinput = () => {
  return (
    <>
      <TextInput
        onChangeText={handleChange('emailAddress')}
        onBlur={handleBlur('emailAddress')}
        value={values.emailAddress}
        style={styleFormComponents.defaultTextInput}
        placeholder="Email Address"
        placeholderTextColor={COLORS.textBlue}
        selectionColor={COLORS.textBlue}
        keyboardType="email-address"
      />
    </>
  );
};

const CustomIconTextinput = () => {
    return(
        <>
        <TextInput
        onChangeText={handleChange('emailAddress')}
        onBlur={handleBlur('emailAddress')}
        value={values.emailAddress}
        style={styleFormComponents.defaultTextInput}
        placeholder="Email Address"
        placeholderTextColor={COLORS.textBlue}
        selectionColor={COLORS.textBlue}
        keyboardType="email-address"
      />
        </>
    )
}

export {CustomTextinput, CustomIconTextinput};
