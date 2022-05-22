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

const LoginForm = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
    password: Yup.string()
      .min(8, ({min}) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });

  const userInfo = {
    emailAddress: '',
    password: '',
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
            {/* Email Address */}
            <View style={{marginTop: SIZES.padding * 1}}>
              <TextInput
                onChangeText={handleChange('emailAddress')}
                onBlur={handleBlur('emailAddress')}
                value={values.emailAddress}
                style={formStyles.defaultTextInput}
                placeholder="Email Address"
                placeholderTextColor={COLORS.placeHolderColor}
                selectionColor={COLORS.placeHolderColor}
                keyboardType="email-address"
              />
              {errors.emailAddress && touched.emailAddress ? (
                <Text style={formStyles.formErrorText}>
                  {errors.emailAddress}
                </Text>
              ) : null}
            </View>

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
                  secureTextEntry={!showPassword}
                  returnKeyType="done"
                  maxLength={8}
                />

                <TouchableOpacity
                  style={formStyles.defaultTextInputIconHolder}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={showPassword ? icons.disabledEyes : icons.eyes}
                    style={formStyles.defaultTextInputIcon}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                <Text style={formStyles.formErrorText}>{errors.password}</Text>
              ) : null}
            </View>

            {/* Forget Password */}
            <TouchableOpacity
              style={globalStyles.forgotPasswordWrapper}
              onPress={() => navigation.navigate('ForgotPass')}>
              <Text style={globalStyles.forgotPasswordText}>
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={buttonStyles.buttonWrapper}>
            <TouchableOpacity style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={globalStyles.footerActionWrapper}>
            <Text style={typographyStyles.textFooterAction}>
              Not an agent yet?{' '}
              <Text style={typographyStyles.textHighLight}>Sign Up</Text>
            </Text>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
