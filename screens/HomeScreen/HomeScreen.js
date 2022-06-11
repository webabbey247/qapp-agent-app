import React, { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Animated
} from 'react-native';

import {
  typographyStyles,
  globalStyles,
  HomeScreenStyles,
} from '../../assets/styles';
import { COLORS, icons, images, SIZES } from '../../constants';
import { HomeSearchForm } from '../../components/Forms';
import {
  TransactionCard,
} from '../../components/commons';
import { GridBankCard } from '../../components/BankCards/GridBankCard';
import * as Icon from "react-native-feather";

const HomeScreen = ({ navigation }) => {
  const [searchForm, setSearchForm] = React.useState(false);
  const [user, setUser] = useState('');
  const [currentTab, setCurrentTab] = useState("Home")
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const userData = async () => {
    try {
      const userData = JSON.parse(await AsyncStorage.getItem('userDump'))
      if (userData) {
        setUser(userData);
      }
      console.log("user Info checker", userData)
      return user
    }
    catch (e) {
      console.log(`user info error issues ${e}`);
    }
  }

  React.useEffect(() => {
    userData();
  }, []);


  const renderMenu = (currentTab, setCurrentTab, title, image) => {
    return (
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") { } else {
          setCurrentTab(title)
        }
      }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab === title ? COLORS.bgColor : "transparent",
          borderRadius: 8,
          paddingLeft: 20,
          paddingRight: 40,
          marginTop: 15,
          width: 170,
        }}>
                   {image}
          {/*  */}
          {/* <Image
            source={image}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: currentTab === title ? "white" : "white",
            }} /> */}
          <Text style={{
            fontSize: 15,
            paddingLeft: 15,
            fontWeight: 'bold',
            color: currentTab === title ? "white" : "white",
          }}>{title}</Text>


        </View>

      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1, backgroundColor: COLORS.bgColor }}>


      <View style={{
        flex: 1,
        justifyContent: "flex-start",
        padding: 20,
        backgroundColor:COLORS.buttonBgColor
      }}>
        <Image
          source={images.profileImg}
          resizeMode="contain"
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }} />
        <Text style={{
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          marginTop: 20,
        }}>{user.firstname} {user.lastname}</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 8,
            color: "white"
          }}>Last Login: {user.lastLogin}</Text>
        </TouchableOpacity>

        {/* Navigation section */}
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {renderMenu(currentTab, setCurrentTab, "Home", <Icon.Activity color="white" />)}
          {renderMenu(currentTab, setCurrentTab, "Banks", <Icon.BarChart color="white" />)}
          {renderMenu(currentTab, setCurrentTab, "Privacy", <Icon.HelpCircle color="white" />)}
          {renderMenu(currentTab, setCurrentTab, "Settings", <Icon.Settings color="white" />)}
        </View>


        <TouchableOpacity>
          {renderMenu(currentTab, setCurrentTab, "LogOut",  <Icon.Power color="white" />)}
        </TouchableOpacity>

      </View>

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: COLORS.bgColor,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: SIZES.padding * 0.5,
        // paddingVertical: SIZES.padding * 2,
        borderRadius: showMenu ? 15 : 0,

        // transform
        transform: [
          {scale: scaleValue },
          {translateX: offsetValue}
        ]
      
      }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <StatusBar animated={true} barStyle="light-content" />
          <View style={globalStyles.homeHeaderContainer}>
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
        <TouchableOpacity onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
            .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 220,
              duration: 300,
              useNativeDriver: true
            })
            .start()

            Animated.timing(closeButtonOffset, {
              toValue: showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
            .start()
            setShowMenu(!showMenu);}}>
          {showMenu ?  <Icon.X color="white" /> :
         (<Image
          source={icons.menuIcon}
          resizeMode="contain"
          style={globalStyles.headerMenuIcon}
        />)
        }
          </TouchableOpacity>
        </Animated.View>
          <View>
         
            <Image
              source={images.profileImg}
              resizeMode="contain"
              style={globalStyles.headerProfileImg}
            />
          </View>
        </View>
          {/* <HeaderLogo type="home" /> */}
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={globalStyles.headerSearchContainer}>
              <View>
                <Text style={typographyStyles.textHeading}>Good Morning</Text>
                <Text style={typographyStyles.textParagraph}>
                  Welcome, {user.firstname}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setSearchForm(!searchForm)}>
                <Image
                  source={icons.searchIcon}
                  resizeMode="contain"
                  style={globalStyles.headerSearchicon}
                />
              </TouchableOpacity>
            </View>

            {searchForm && <HomeSearchForm />}

            <GridBankCard navigation={navigation} />

            <View style={HomeScreenStyles.subSectionContainer}>
              <View>
                <Text style={HomeScreenStyles.subSectionLTR}>
                  Transaction History
                </Text>
              </View>
              <View style={HomeScreenStyles.subSectionRTLWrapper}>
                <Text style={HomeScreenStyles.subSectionRTL}>View All</Text>
              </View>
            </View>

            <View style={HomeScreenStyles.transactionListContainer}>
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
