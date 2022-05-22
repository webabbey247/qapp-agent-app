import React from 'react';
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

const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const [showOTP, setShowOTP] = React.useState(false);
  const [stepTwo, setSteptwo] = React.useState(false);

  const validationOneSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
  });

  const validationStepTwoSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
    otp: Yup.string()
      .required(
        'Kindly provide the OTP sent to your email address.',
      )
      .matches(/^\d{10}$/, 'Kindly input a valid OTP')
      .min(6, 'OTP must be atleast the 6 characters long.')
      .max(6, 'OTP must be atleast the 6 characters long.'),
  });

  const userInfo = {
    emailAddress: '',
    otp: '',
  };

  return (
    <>
      <Formik
        validationSchema={
          stepTwo ? validationStepTwoSchema : validationOneSchema
        }
        initialValues={userInfo}
        onSubmit={(values, formikActions) => {
              setShowOTP(true);
              setSteptwo(true);
              const formData = {
                emailAddress: values.emailAddress,
                otp: values.otp,
              };
              console.log(formData)
              navigation.navigate('ResetPass')
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
            <View
              style={[
                formStyles.formWrapper,
                {
                  marginBottom: SIZES.padding * 1,
                },
              ]}>
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

              {/* OTP */}

              {showOTP ? (
                <View style={{marginTop: SIZES.padding * 1.5}}>
                  <TextInput
                    onChangeText={handleChange('otp')}
                    onBlur={handleBlur('otp')}
                    value={values.otp}
                    style={formStyles.defaultTextInput}
                    placeholder="Enter OTP"
                    placeholderTextColor={COLORS.placeHolderColor}
                    selectionColor={COLORS.placeHolderColor}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                  {errors.otp && touched.otp ? (
                    <Text style={formStyles.formErrorText}>
                      {errors.otp}
                    </Text>
                  ) : null}
                  <Text style={formStyles.formBottomLabel}>Enter the OTP sent to joh****@email.com</Text>
                </View>
              ) : null}
            </View>
            {stepTwo ? (
           <View style={buttonStyles.buttonWrapper}>
           <TouchableOpacity style={buttonStyles.defaultButton}>
             <Text style={typographyStyles.defaultButtonText}>Verify OTP</Text>
           </TouchableOpacity>
         </View>
          ) : (
            <View style={buttonStyles.buttonWrapper}>
            <TouchableOpacity onPress={handleSubmit} style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
          )}
          </>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
