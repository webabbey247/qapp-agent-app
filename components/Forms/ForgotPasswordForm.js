import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import { forgetPass, reset } from '../../features/auth/authSlice';
import {
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';
import { SnackAlert } from '../../utils/SnackAlert';
import { Messages } from '../../utils/Messages';


const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [stepTwo, setSteptwo] = React.useState(false);
  const { forgetPayload, isError, isSuccess } = useSelector((state) => state.auth);

  React.useEffect(() => {

    if (isError) {
      console.log("isError response tag", forgetPayload.message ? forgetPayload.message : "")
    }

    if (isSuccess) {
      console.log("isSuccess response tag", forgetPayload.result ? forgetPayload.result : "")
      if (forgetPayload.success === false) {
        SnackAlert.show(forgetPayload.message ? forgetPayload.message : "");
        // console.log("isSuccess response tag", forgetPayload.message ? forgetPayload.message : "")
      } else {
        if (stepTwo) {
          console.log("isSuccess token result tag", forgetPayload.result ? forgetPayload.result.token : "")
          setTimeout(() => {
            navigation.navigate("ResetPass",{
                params: {
                token: forgetPayload.result.token
              }
            });
          }, 500);
        } else {
          SnackAlert.show(forgetPayload.message ? forgetPayload.message : "");
          setSteptwo(true);
          console.log("isSuccess result tag", forgetPayload.result ? forgetPayload.result : "")
        }

      }
    }
    // dispatch(reset());
  }, [forgetPayload, isError, isSuccess])




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

  const resetPassInfo = {
    emailAddress: '',
    otp: '',
  };

  return (
    <>
      <Formik
        validationSchema={
          stepTwo ? validationStepTwoSchema : validationOneSchema
        }
        initialValues={resetPassInfo}
        onSubmit={(values, formikActions) => {

          const resetPassInfo = {
            emailAddress: values.emailAddress,
            otp: stepTwo ? values.otp : "",
          };

          if (stepTwo) {
            // dispatch(forgetPass(resetPassInfo));
            console.log("Step Two Reset Password", resetPassInfo)
          } else {
            console.log("Forget Password", resetPassInfo)
            dispatch(forgetPass(resetPassInfo));
          }
          // formikActions.resetForm();
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
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
              <View style={{ marginTop: SIZES.padding * 1 }}>
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

              {stepTwo ? (
                <View style={{ marginTop: SIZES.padding * 1.5 }}>
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
              <View style={[buttonStyles.buttonWrapper, {
                marginTop: SIZES.padding * 1,
              }]}>
                <TouchableOpacity style={buttonStyles.defaultButton}>
                  <Text style={typographyStyles.defaultButtonText}>Verify OTP</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={[buttonStyles.buttonWrapper, {
                marginTop: SIZES.padding * 1,
              }]}>
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
