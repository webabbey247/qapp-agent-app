import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, icons, FONTS} from '../../constants';
import {
  globalStyles,
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';

const ResetPasswordForm = ({navigation}) => {
  // const navigation = useNavigation();
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, ({min}) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });

  const userInfo = {
    password: '',
    confirmPassword: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={userInfo}
      onSubmit={(values, formikActions) => {
        // setTimeout(() => {
        //   console.log(values);
        //   formikActions.resetForm();
        //   navigation.navigate('OTPAuth', {typeUrl: 'Login'});
        // }, 1000);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <>
          <View style={formStyles.formWrapper}>
            {/* Password */}
            <View style={{marginTop: SIZES.padding * 1.5}}>
              <View>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={formStyles.defaultTextInput}
                  placeholder="Password"
                  placeholderTextColor={COLORS.placeHolderColor}
                  selectionColor={COLORS.placeHolderColor}
                  secureTextEntry={!password}
                  returnKeyType="done"
                  maxLength={8}
                />

                <TouchableOpacity
                  style={formStyles.defaultTextInputIconHolder}
                  onPress={() => setPassword(!password)}>
                  <Image
                    source={password ? icons.disabledEyes : icons.eyes}
                    style={formStyles.defaultTextInputIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={formStyles.formErrorText}>{errors.password}</Text>
              ) : null}
            </View>

            {/* COnfirm Password */}
            <View style={{marginTop: SIZES.padding * 2}}>
              <View>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={formStyles.defaultTextInput}
                  placeholder="Confirm Password"
                  placeholderTextColor={COLORS.placeHolderColor}
                  selectionColor={COLORS.placeHolderColor}
                  secureTextEntry={!confirmPassword}
                  returnKeyType="done"
                  maxLength={8}
                />

                <TouchableOpacity
                  style={formStyles.defaultTextInputIconHolder}
                  onPress={() => setConfirmPassword(!confirmPassword)}>
                  <Image
                    source={confirmPassword ? icons.disabledEyes : icons.eyes}
                    style={formStyles.defaultTextInputIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={formStyles.formErrorText}>{errors.password}</Text>
              ) : null}
            </View>
          </View>
          <View
            style={[
              buttonStyles.buttonWrapper,
              {
                marginTop: SIZES.padding * 2,
              },
            ]}>
            <TouchableOpacity style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
