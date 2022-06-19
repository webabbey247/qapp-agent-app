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
import { forgetUserPass } from '../../api/forgetPassApi';
import {
  validateEmailPending,
validateEmailSuccess,
validateEmailFail,
validateOTPPending,
validateOTPSuccess,
validateOTPFail,
validateNewPassPending,
validateNewPassSuccess,
validateNewPassFail
} from "../../reducers/Slice/forgetPassSlice"
import { isEmpty } from 'lodash';



const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [stepTwo, setSteptwo] = React.useState(false);
  const { token, error, showOTPForm } = useSelector((state) => state.forgetPass);

  console.log("get token state", token)
  console.log("get showOTP form state", showOTPForm)

  const validationOneSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
  });

  const validationStepTwoSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
    code: Yup.string()
      .required(
        'Kindly provide the OTP sent to your email address.',
      )
      .matches(/^\d{10}$/, 'Kindly input a valid OTP')
      .min(6, 'OTP must be atleast the 6 characters long.')
      .max(6, 'OTP must be atleast the 6 characters long.'),
  });

  const resetPassInfo = {
    emailAddress: '',
    code: '',
  };

  return (
    <>
      <Formik
        validationSchema={
          showOTPForm ? validationStepTwoSchema : validationOneSchema
        }
        initialValues={resetPassInfo}
        onSubmit={async (values, formikActions) => {

          const resetPassInfo = {
            // email: "balogun.abiodunlive@gmail.com",
            // code: "",
            email: values.emailAddress,
            // code: showOTPForm ? values.code : ""
          };

          // dispatch(registerPending());
          // NetInfo.fetch().then((state) => {
          //   if (state.isConnected) {

          try {
          
            if(showOTPForm){
              console.log("tracking OTP form")
              // dispatch(validateOTPPending())

              // const isVerified = await forgetUserPass(resetPassInfo);

              // if (isVerified.success === false) {
              //   SnackAlert.show(isVerified.message ? isVerified.message : "");
              //   console.log("server handshake with error response", isVerified.message ? isVerified.message : "");
              //   return dispatch(validateOTPFail(isVerified.message ? isVerified.message : ""));
             
              // } else {
                
              //   dispatch(validateOTPSuccess())
              //   console.log("server handshake with success response", isVerified.message ? isVerified.message : "");
              //   SnackAlert.show(isVerified.message ? isVerified.message : "");
              //   dispatch(validateOTPSuccess())
              //   setTimeout(() => {
              //     navigation.navigate('ResetPassScreen', {
              //       params: { token: isVerified.result },
              //     }
              //     );
              //   }, 500);
                
              // }
            } else {
              dispatch(validateEmailPending());
              const isRegistered = await forgetUserPass(resetPassInfo);
              console.log("tracking email form form", resetPassInfo)

              if(isRegistered.success === true){
                dispatch(validateEmailSuccess())
                SnackAlert.show(isRegistered.message ? isRegistered.message : "");
              }


              // if (isRegistered.success === false) {
              //   SnackAlert.show(isRegistered.message ? isRegistered.message : "");
              //   console.log("server handshake with error response", isRegistered.message ? isRegistered.message : "");
              //   return dispatch(validateEmailFail(isRegistered.message ? isRegistered.message : ""));
             
              // } else {
              //   dispatch(validateEmailSuccess())
              //   SnackAlert.show(isRegistered.message ? isRegistered.message : "");
              // }
            }

          } catch (error) {
            dispatch(validateEmailFail(error.message));
            SnackAlert.show(error.message ? error.message : "");
            console.log("no server handshake", error.message)
          }
        
          
        //   else if (isRendered.current) {
        //     Display.show("Kindly check your internet connections");
        //   }
        // });

            // const isRegistered = await userRegistration(registerData);
            // console.log("hello isRegistered", isRegistered);
  
          //   NetInfo.fetch().then((state) => {
          //     if (state.isConnected) {
  
          //       if (isRegistered.success === false) {
          //         SnackAlert.show(isRegistered.message ? isRegistered.message : "");
          //         console.log("server handshake with error response", isRegistered.message ? isRegistered.message : "");
          //         return dispatch(registerFail(isRegistered.message ? isRegistered.message : ""));
          //       }
  
          //       if (isRegistered.success === true) {
          //         dispatch(registerSuccess());
          //         SnackAlert.show(Messages.RegisterStatus);
          //         console.log("you have successfully logged in");
          //       }
          //     } else if (isRendered.current) {
          //       Display.show(Errors.Internet);
          //     }
          //   })
  
          // } catch (error) {
          //   dispatch(registerFail(error.message));
          //   SnackAlert.show(error.message ? error.message : "");
          //   console.log("no server handshake", error.message)
          // }


          // if (stepTwo) {
          //   // dispatch(forgetPass(resetPassInfo));
          //   console.log("Step Two Reset Password", resetPassInfo)
          // } else {
          //   console.log("Forget Password", resetPassInfo)
          //   dispatch(forgetPass(resetPassInfo));
          // }
          
          formikActions.resetForm();
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

              {showOTPForm ? (
                <View style={{ marginTop: SIZES.padding * 1.5 }}>
                   <Text style={formStyles.formLabel}>
                                  OTP
                                </Text>
                  <TextInput
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                    style={formStyles.defaultTextInput}
                    placeholder="Enter OTP"
                    placeholderTextColor={COLORS.placeHolderColor}
                    selectionColor={COLORS.placeHolderColor}
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                  {errors.code && touched.code ? (
                    <Text style={formStyles.formErrorText}>
                      {errors.code}
                    </Text>
                  ) : null}
                  {/* <Text style={formStyles.formBottomLabel}>Enter the OTP sent to joh****@email.com</Text> */}
                </View>
              ) : null}
            </View>


            { showOTPForm ? (
              <View style={[buttonStyles.buttonWrapper, {
                marginTop: SIZES.padding * 1,
              }]}>
                <TouchableOpacity onPress={handleSubmit} style={buttonStyles.defaultButton}>
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
            )
          }


            {/* {showOTPForm ? (
              <View style={[buttonStyles.buttonWrapper, {
                marginTop: SIZES.padding * 1,
              }]}>
                <TouchableOpacity onPress={handleSubmit} style={buttonStyles.defaultButton}>
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
            )} */}
          </>
        )}
      </Formik>
    </>
  );
};

export default ForgotPasswordForm;
