import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { loginPending, loginSuccess, loginFail } from "../../reducers/Slice/loginSlice";
import { userLogin } from "../../api/userApi";
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import {
  globalStyles,
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';
import { SnackAlert } from '../../utils/SnackAlert';
import { Errors, Messages } from '../../utils/Messages';


const LoginForm = () => {
  const isRendered = React.useRef(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, isAuth, error } = useSelector(state => state.login);

  React.useEffect(() => {
    isRendered.current = true;
    return () => {
      isRendered.current = false;
    };

  }, [isAuth]);



  const validationSchema = Yup.object().shape({
    emailAddress: Yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
    password: Yup.string()
      .min(8, ({ min }) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
  });

  const loginInfo = {
    emailAddress: '',
    password: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={loginInfo}
      onSubmit={async (values, formikActions) => {

        const userData = {
          email: values.emailAddress,
          password: values.password,
        };
              // email: "tamsay2017@gmail.com",
          // password: "12345678"
          // email: "balogun.abbey28@gmail.com",
          // password: "Null@001"
          //"username": "balogun.abbey28@gmail.com",
          // "password": "Null@001"

        dispatch(loginPending());

        try {
          const isAuth = await userLogin(userData);
          console.log("hello isAuth", isAuth);

          NetInfo.fetch().then((state) => {
            if (state.isConnected) {

              if (isAuth.success == false) {
                SnackAlert.show(isAuth.message ? isAuth.message : "");
                console.log("server handshake with error response", isAuth.message ? isAuth.message : "");
                return dispatch(loginFail(isAuth.message ? isAuth.message : ""));
              }

              if (isAuth.success == true) {
                dispatch(loginSuccess(isAuth.result));
                AsyncStorage.setItem('userDump', JSON.stringify(isAuth.result))
                AsyncStorage.setItem('userAuthToken', JSON.stringify(isAuth.result.jwt))
                console.log("..........", isAuth.result)
                setTimeout(() => {
                  navigation.navigate('HomeScreen', {
                    screen: 'Home',
                    params: { user: isAuth.result },
                  }
                  );
                }, 500);
                console.log("you will be directed to Dashboard");
              }
            } else if (isRendered.current) {
              Display.show(Errors.Internet);
            }
          });

        } catch (e) {
          dispatch(loginFail(error.message));
          SnackAlert.show(error.message ? error.message : "");
          console.log("no server handshake", error.message)
        }
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
          <View style={formStyles.formWrapper}>
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

            {/* Password */}
            <View style={{ marginTop: SIZES.padding * 1.5 }}>
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
            <TouchableOpacity onPress={handleSubmit} style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>{isLoading ? "Loading...." : "Sign In"}</Text>
              {/* <Text style={typographyStyles.defaultButtonText}>Sign In</Text> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={globalStyles.footerActionWrapper}>
            <Text style={typographyStyles.textFooterAction}>
              Not an agent yet?{' '}
              <Text style={typographyStyles.textHighLight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
