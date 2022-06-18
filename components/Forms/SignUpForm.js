/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { registerPending, registerSuccess, registerFail } from "../../reducers/Slice/userRegistrationSlice";
import { userRegistration } from "../../api/userApi";
import { COLORS, SIZES, icons, FONTS } from '../../constants';
import { SnackAlert } from '../../utils/SnackAlert';
import {Errors, Messages } from '../../utils/Messages';
import {
  globalStyles,
  formStyles,
  buttonStyles,
  typographyStyles,
} from '../../assets/styles';

const SignUpForm = () => {
  const isRendered = React.useRef(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState('');
  const [modalVisbile, setModalVisible] = useState(false);
  const { isLoading, error } = useSelector(state => state.registration);


  React.useEffect(() => {
    isRendered.current = true;

    fetch('https://restcountries.com/v3/all')
      .then(response => response.json())
      .then(data => {
        const areaCodeData = data.map(item => {
          return {
            code: item.cca2,
            name: item.name.common,
            flag: item.flags[1],
            dialCode: [item.idd.root, (item.idd.suffixes || [])[0]].join(''),
          };
        });

        setAreaCode(areaCodeData);
        if (areaCodeData.length > 0) {
          let defaultAreaData = areaCodeData.filter(a => a.code === 'NG');
          if (defaultAreaData.length > 0) {
            setSelectedAreaCode(defaultAreaData[0]);
            // console.log(selectedAreaCode);
          }
        }
      })
      .catch(err => {
        console.error('Request failed', err);
      });

      return () => {
        isRendered.current = false;
      };

  }, []);


  const renderSearchHeader = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.padding * 2,
          backgroundColor: COLORS.bgColor,
          marginBottom: SIZES.padding * 1.5,
        }}>
        <TextInput
          style={{
            borderColor: COLORS.borderColor,
            borderStyle: 'solid',
            borderWidth: 1,
            backgroundColor: COLORS.transparent,
            paddingHorizontal: SIZES.padding * 2,
            height: 45,
            color: COLORS.grayColor,
            borderRadius: 5,
          }}
          onChangeText={text => searchFilterFunction(text)}
          autoCorrect={false}
          placeholder="Search"
          placeholderTextColor={COLORS.placeHolderColor}
          selectionColor={COLORS.placeHolderColor}
          keyboardType="default"
        />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: SIZES.padding * 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          setSelectedAreaCode(item);
          setModalVisible(false);
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: SIZES.padding * 1,
          }}>
          <Image
            source={{ uri: item.flag }}
            style={{
              width: 25,
              height: 15,
              marginRight: SIZES.padding * 2,
              marginTop: 3,
            }}
          />
          <Text style={{ color: COLORS.white }}>{item.name}</Text>
        </View>
        <View>
          <Text style={{ color: COLORS.white }}>{item.dialCode}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderAreaCodeModal = (
    <Modal animationType="slide" transparent={true} visible={modalVisbile}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: SIZES.width * 1,
              backgroundColor: COLORS.textBlue,
            }}>
            <FlatList
              data={areaCode}
              renderItem={renderItem}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={renderSearchHeader}
              stickyHeaderIndices={[0]}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('Kindly provide your first name'),
    lastName: yup.string().required('Kindly provide your last name'),
    emailAddress: yup.string()
      .email('Kindly provide a valid email address')
      .required('Kindly provide your registered email address'),
    phoneNumber: yup.string()
      .required('Kindly provide your registered email address'),
    password: yup.string()
      .min(8, ({ min }) => `Password must be atleast ${min} characters`)
      .required('kindly provide your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
      ),
    confirmPassword: yup.string()
      .required("kindly provide your secured passcode!")
      .min(8, ({ min }) => `Password must be atleast ${min} characters`)
      .oneOf([yup.ref('password'), null], 'Passcode must match'),

  });

  const registerInfo = {
    firstName: '',
    lastName: '',
    phoneNumber: "",
    emailAddress: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={registerInfo}
      onSubmit={async (values, formikActions) => {
        
        // const registerData = {
        //   first_name: "Frank",
        //   last_name: "Obaidi",
        //   phone: "+2347037515043",
        //   email: "frankobiadi@gmail.com",
        //   password: "Null@001",
        //   confirm_password:  "Null@001",
        //   is_confirm_password: true
        // }

        const registerData = {
          first_name: values.firstName,
          last_name: values.lastName,
          phone: [selectedAreaCode.dialCode, +(values.phoneNumber)].join(''),
          email: values.emailAddress,
          password: values.password,
          confirm_password: values.confirmPassword,
          is_confirm_password: true
        }

        dispatch(registerPending());
        
        try {
          const isRegistered = await userRegistration(registerData);
          console.log("hello isRegistered", isRegistered);

          NetInfo.fetch().then((state) => {
            if (state.isConnected) {

              if (isRegistered.success === false) {
                SnackAlert.show(isRegistered.message ? isRegistered.message : "");
                console.log("server handshake with error response", isRegistered.message ? isRegistered.message : "");
                return dispatch(registerFail(isRegistered.message ? isRegistered.message : ""));
              }

              if (isRegistered.success === true) {
                dispatch(registerSuccess());
                SnackAlert.show(Messages.RegisterStatus);
                console.log("you have successfully logged in");
              }
            } else if (isRendered.current) {
              Display.show(Errors.Internet);
            }
          });

        } catch (error) {
          dispatch(registerFail(error.message));
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
            {/* First Name */}
            <View>
              <TextInput
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                style={formStyles.defaultTextInput}
                placeholder="First Name"
                placeholderTextColor={COLORS.placeHolderColor}
                selectionColor={COLORS.placeHolderColor}
                keyboardType="default"
              />
              {errors.firstName && touched.firstName ? (
                <Text style={formStyles.formErrorText}>{errors.firstName}</Text>
              ) : null}
            </View>

            {/* Last Name */}
            <View style={{ marginTop: SIZES.padding * 1.5 }}>
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                style={formStyles.defaultTextInput}
                placeholder="Last Name"
                placeholderTextColor={COLORS.placeHolderColor}
                selectionColor={COLORS.placeHolderColor}
              />
              {errors.lastName && touched.lastName ? (
                <Text style={formStyles.formErrorText}>{errors.lastName}</Text>
              ) : null}
            </View>

            {/* Phone Number */}
            <View>
              <View style={{ marginTop: SIZES.padding * 1.5 }}>
                <TextInput
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  style={formStyles.defaultTextInput}
                  placeholder="Phone Number"
                  placeholderTextColor={COLORS.placeHolderColor}
                  selectionColor={COLORS.placeHolderColor}
                keyboardType="number-pad"
                />

                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={formStyles.defaultTextInputCountryHolder}>
                  <Image
                    source={{ uri: selectedAreaCode.flag }}
                    style={formStyles.defaultTextInputCountryIcon}
                  />
                  <Image
                    source={icons.dropdownIcon}
                    style={formStyles.defaultTextInputIcon}
                  />
                </TouchableOpacity>

              </View>
              {errors.phoneNumber && touched.phoneNumber ? (
                <Text style={formStyles.formErrorText}>
                  {errors.phoneNumber}
                </Text>
              ) : null}
            </View>


            {/* Email Address */}
            <View style={{ marginTop: SIZES.padding * 1.5 }}>
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
            <View style={{ marginTop: SIZES.padding * 1.5 }}>
              <View>
                <TextInput
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
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
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text style={formStyles.formErrorText}>{errors.confirmPassword}</Text>
              ) : null}
            </View>
          </View>
          <View
            style={[
              buttonStyles.buttonWrapper,
              { marginTop: SIZES.padding * 2 },
            ]}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={buttonStyles.defaultButton}>
              <Text style={typographyStyles.defaultButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={globalStyles.footerActionWrapper}>
            <Text style={typographyStyles.textFooterAction}>
              Already an agent?{' '}
              <Text style={typographyStyles.textHighLight}>Login</Text>
            </Text>
          </TouchableOpacity>
          {renderAreaCodeModal}
        </>
      )}
    </Formik>
  );
};

export default SignUpForm;
