import React, { useRef, useState } from 'react';
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
// import {
//   TransactionCard,
// } from '../../components/commons';
import { SnackAlert } from '../../utils/SnackAlert';
import { GridBankCard } from '../../components/BankCards/GridBankCard';
import * as Icon from "react-native-feather";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData, logOutUser } from '../../reducers/Actions/loginAction';
import { fetchAllTransactions } from '../../reducers/Actions/transactionAction';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { isEmpty } from 'lodash';
import TransactionList from '../../components/Transactions/TransactionList';
import { Messages } from '../../utils/Messages';



const HomeScreen = ({route, navigation }) => {
  console.log("checking", route);
// const {user} = route.params;
console.log("this is user info", route);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("Home")
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const {isAuth, user} = useSelector(state => state.login)
  const {transactionList} = useSelector(state => state.transactions)




  const userInfo = user

  console.log("checking status user", userInfo)
  console.log("checking status isAuth", isAuth)

  const signOut = () => {
    dispatch(logOutUser())
    setTimeout(() => {
      SnackAlert.show(Messages.LogoutResponse);
      navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    }, 3000)
  }

  React.useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchAllTransactions);
}, [isAuth, fetchAllTransactions, logOutUser]);
  


  const renderMenu = (currentTab, setCurrentTab, title, image, baseUrl) => {
    return (
      <TouchableOpacity onPress={() => {
        if (title == "LogOut") { 
          signOut();
        } else {
          setCurrentTab(title)
          navigation.navigate(`${baseUrl}`)
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
        }}>
          {userInfo.firstname} {userInfo.lastname}
          </Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 8,
            color: "white"
          }}>
            Last Login: {userInfo ? userInfo.lastLogin : "N/A"}
          </Text>
        </TouchableOpacity>

        {/* Navigation section */}
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {renderMenu(currentTab, setCurrentTab, "Home", <Icon.Activity color="white" />, "Home")}
          {renderMenu(currentTab, setCurrentTab, "Banks", <Icon.BarChart color="white" />, "Bank")}
          {renderMenu(currentTab, setCurrentTab, "Privacy", <Icon.HelpCircle color="white" />, "Home")}
          {renderMenu(currentTab, setCurrentTab, "Settings", <Icon.Settings color="white" />, "Home")}
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
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View style={globalStyles.headerSearchContainer}>
              <View>
                <Text style={typographyStyles.textHeading}>Good Morning</Text>
                <Text style={typographyStyles.textParagraph}>
                  Welcome, {userInfo.firstname}
                </Text>
              </View>
            </View>

            <SectionTitle navigation={navigation} title="Active Banks" typeUrl="Bank" />

            <GridBankCard navigation={navigation}  />

            {/* <SectionTitle  navigation={navigation} title="Transaction History" typeUrl="Transaction" /> */}

            {transactionList.length >= 1 && <SectionTitle  navigation={navigation} title="Transaction History" typeUrl="Transaction" />  }
               <TransactionList data={transactionList} />

          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
