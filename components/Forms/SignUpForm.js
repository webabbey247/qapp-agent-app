/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const SignUpForm = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [areaCode, setAreaCode] = useState([]);
  const [selectedAreaCode, setSelectedAreaCode] = useState('');
  const [modalVisbile, setModalVisible] = useState(false);

  React.useEffect(() => {
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
  }, []);

  const renderSearchHeader = () => {
    return (
      <View
        style={{
          marginVertical: SIZES.padding * 1.5,
          paddingHorizontal: SIZES.padding * 2,
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
          placeholder="Search"
          placeholderTextColor={COLORS.placeHolderColor}
          selectionColor={COLORS.placeHolderColor}
          keyboardType="default"
        />
      </View>
    );
  };

  const renderItem = ({item}) => {
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
            source={{uri: item.flag}}
            style={{
              width: 25,
              height: 15,
              marginRight: SIZES.padding * 2,
              marginTop: 3,
            }}
          />
          <Text style={{color: COLORS.white}}>{item.name}</Text>
        </View>
        <View>
          <Text style={{color: COLORS.white}}>{item.dialCode}</Text>
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
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Kindly provide your first name'),
    lastName: Yup.string().required('Kindly provide your last name'),
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
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={userInfo}
      onSubmit={(values, formikActions) => {
        console.log(values);
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
            <View style={{marginTop: SIZES.padding * 1.5}}>
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.emailAddress}
                style={formStyles.defaultTextInput}
                placeholder="Last Name"
                placeholderTextColor={COLORS.placeHolderColor}
                selectionColor={COLORS.placeHolderColor}
                keyboardType="email-address"
              />
              {errors.lastName && touched.lastName ? (
                <Text style={formStyles.formErrorText}>{errors.lastName}</Text>
              ) : null}
            </View>

            {/* Phone Number */}
            <View style={{marginTop: SIZES.padding * 1.5}}>
              <TextInput
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
                style={formStyles.defaultTextInput}
                placeholder="Phone Number"
                placeholderTextColor={COLORS.placeHolderColor}
                selectionColor={COLORS.placeHolderColor}
                keyboardType="email-address"
              />

              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={formStyles.defaultTextInputCountryHolder}>
                <Image
                  source={{uri: selectedAreaCode.flag}}
                  style={formStyles.defaultTextInputCountryIcon}
                />
                <Image
                  source={icons.dropdownIcon}
                  style={formStyles.defaultTextInputIcon}
                />
              </TouchableOpacity>
              {errors.phoneNumber && touched.phoneNumber ? (
                <Text style={formStyles.formErrorText}>
                  {errors.phoneNumber}
                </Text>
              ) : null}
            </View>

            {/* Email Address */}
            <View style={{marginTop: SIZES.padding * 1.5}}>
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
            <View style={{marginTop: SIZES.padding * 1.5}}>
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
              {marginTop: SIZES.padding * 2},
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
