import AsyncStorage from '@react-native-async-storage/async-storage';

 export const userData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userDump')
      const user = JSON.parse(userInfo)
      console.log("user Info checker", user)   
       return user;
    }
    catch (e) {
      console.log(`user info error issues ${e}`);
    }
  }
