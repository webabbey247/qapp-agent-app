import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import {COLORS, SIZES, icons, FONTS} from '../../constants';
import {
  globalStyles,
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';
import { SnackAlert } from '../../utils/SnackAlert';
import { Messages } from '../../utils/Messages';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const {loginPayload, isError, isSuccess} = useSelector((state) => state.auth);


  React.useEffect(() => {

    if(isError){
      console.log("isError response tag", loginPayload.message ? loginPayload.message : "")
    } 
    
    if(isSuccess) {
      console.log("isSuccess response tag", loginPayload.result ? loginPayload.result : "")
      if(loginPayload.success === false){
        SnackAlert.show(loginPayload.message ? loginPayload.message : "");
        console.log("isSuccess response tag", loginPayload.message ? loginPayload.message : "")
      } else {
        console.log("isSuccess result tag", loginPayload.result ? loginPayload.result : "")
        // console.log("isSuccess token result tag", loginPayload.result ? loginPayload.result.jwt : "")
        AsyncStorage.setItem('userDump', JSON.stringify(loginPayload.result))
        AsyncStorage.setItem('userAuthToken', JSON.stringify(loginPayload.result.jwt))
        setTimeout(() => {
          navigation.navigate("HomeScreen", {
            screen: "Home", 
              params: {
              user: loginPayload.result
            }
          });
        }, 500);
      }
    }
    dispatch(reset());    
  }, [loginPayload, isError, isSuccess, navigation, dispatch])
  


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

  const loginInfo = {
    emailAddress: '',
    password: '',
  };

  return (
    <Formik
      // validationSchema={validationSchema}
      initialValues={loginInfo}
      onSubmit={(values, formikActions) => {

        // const loginData = {
        //   username: values.emailAddress,
        //   password: values.password,
        // }

        const loginData = {
          username: "balogun.abbey28@gmail.com",
          password: "Null@001"
        }
        console.log("login data info checker", loginData)
        dispatch(login(loginData));
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
            <TouchableOpacity onPress={handleSubmit} style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>Sign In</Text>
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
