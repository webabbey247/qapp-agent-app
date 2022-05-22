import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {typographyStyles, formStyles} from '../../assets/styles';
import {COLORS, icons, images, SIZES} from '../../constants';
import {HomeSearchForm} from '../../components/Forms';
import {HeaderLogo} from '../../components/commons';

const HomeScreen = () => {
  const [searchForm, setSearchForm] = React.useState(false);

  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: COLORS.bgColor}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <StatusBar animated={true} barStyle="light-content" />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <HeaderLogo type="home" />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding * 2,
              paddingVertical: SIZES.padding * 1.5,
            }}>
            <View>
              <Text style={typographyStyles.textHeading}>Good Morning</Text>
              <Text style={typographyStyles.textParagraph}>
                Welcome, Michael
              </Text>
            </View>
            <TouchableOpacity onPress={() => setSearchForm(!searchForm)}>
              <Image
                source={icons.searchIcon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          {searchForm && <HomeSearchForm />}

          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding * 2,
              marginVertical: SIZES.padding * 2,
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.grayColor,
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 24,
                  marginTop: SIZES.padding * 0.5,
                }}>
                Active Banks
              </Text>
            </View>
            <View
              style={{
                backgroundColor: COLORS.buttonBgColor,
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{
                  color: COLORS.grayColor,
                  fontWeight: '400',
                  fontSize: 12,
                  lineHeight: 12,
                }}>
                View All
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: SIZES.padding * 2,
              marginVertical: SIZES.padding * 1.5,
            }}>
            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 2,
                paddingHorizontal: SIZES.padding * 1,
                width: 124,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.padding * 1.5,
              }}>
              <View>
                <View>
                  <Image
                    source={images.bankOne}
                    resizeMode="contain"
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginVertical: SIZES.padding * 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.borderColor,
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 20,
                    }}>
                    Oceanic
                  </Text>
                  <Text
                    style={{
                      color: COLORS.textColorOne,
                      fontWeight: '600',
                      fontSize: 10,
                      lineHeight: 20,
                    }}>
                    10 Devices
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.grayColor,
                  paddingVertical: SIZES.padding * 1,
                  paddingHorizontal: SIZES.padding * 2,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    color: COLORS.bgColor,
                    fontWeight: '400',
                    fontSize: 10,
                    lineHeight: 20,
                  }}>
                  Details
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 2,
                paddingHorizontal: SIZES.padding * 1,
                width: 124,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.padding * 1.5,
              }}>
              <View>
                <View>
                  <Image
                    source={images.bankTwo}
                    resizeMode="contain"
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginVertical: SIZES.padding * 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.borderColor,
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 20,
                    }}>
                    Oceanic
                  </Text>
                  <Text
                    style={{
                      color: COLORS.textColorOne,
                      fontWeight: '600',
                      fontSize: 10,
                      lineHeight: 20,
                    }}>
                    10 Devices
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.grayColor,
                  paddingVertical: SIZES.padding * 1,
                  paddingHorizontal: SIZES.padding * 2,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    color: COLORS.bgColor,
                    fontWeight: '400',
                    fontSize: 10,
                    lineHeight: 20,
                  }}>
                  Details
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 2,
                paddingHorizontal: SIZES.padding * 1,
                width: 124,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.padding * 1.5,
              }}>
              <View>
                <View>
                  <Image
                    source={images.bankThree}
                    resizeMode="contain"
                    style={{
                      width: 60,
                      height: 60,
                    }}
                  />
                </View>
                <View
                  style={{
                    marginVertical: SIZES.padding * 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: COLORS.borderColor,
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 20,
                    }}>
                    Oceanic
                  </Text>
                  <Text
                    style={{
                      color: COLORS.textColorOne,
                      fontWeight: '600',
                      fontSize: 10,
                      lineHeight: 20,
                    }}>
                    10 Devices
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.grayColor,
                  paddingVertical: SIZES.padding * 1,
                  paddingHorizontal: SIZES.padding * 2,
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    color: COLORS.bgColor,
                    fontWeight: '400',
                    fontSize: 10,
                    lineHeight: 20,
                  }}>
                  Details
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: SIZES.padding * 2,
              marginVertical: SIZES.padding * 2,
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.grayColor,
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 24,
                  marginTop: SIZES.padding * 0.5,
                }}>
                Transaction History
              </Text>
            </View>
            <View
              style={{
                backgroundColor: COLORS.buttonBgColor,
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
              }}>
              <Text
                style={{
                  color: COLORS.grayColor,
                  fontWeight: '400',
                  fontSize: 12,
                  lineHeight: 12,
                }}>
                View All
              </Text>
            </View>
          </View>

          <View
            style={{
              paddingHorizontal: SIZES.padding * 2,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: SIZES.padding * 1,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  Deposit for Jane Doe
                </Text>
                <Text
                  style={{
                    color: COLORS.textColorOne,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 20,
                  }}>
                  Diamond Bank
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  N25,300
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: SIZES.padding * 1,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  Deposit for Jane Doe
                </Text>
                <Text
                  style={{
                    color: COLORS.textColorOne,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 20,
                  }}>
                  Diamond Bank
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  N25,300
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: SIZES.padding * 1,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  Deposit for Jane Doe
                </Text>
                <Text
                  style={{
                    color: COLORS.textColorOne,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 20,
                  }}>
                  Diamond Bank
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  N25,300
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#123D51',
                borderRadius: 8,
                borderColor: 'rgba(244, 244, 244, 0.4)',
                borderWidth: 0.3,
                borderStyle: 'solid',
                paddingVertical: SIZES.padding * 1,
                paddingHorizontal: SIZES.padding * 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: SIZES.padding * 1,
              }}>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  Deposit for Jane Doe
                </Text>
                <Text
                  style={{
                    color: COLORS.textColorOne,
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 20,
                  }}>
                  Diamond Bank
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: COLORS.borderColor,
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 20,
                  }}>
                  N25,300
                </Text>
              </View>
            </View>
          </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
