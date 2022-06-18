import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  getUserPending, 
  getUserSuccess, 
  getUserFail, 
  logoutPending,
  logoutSuccess,
  logoutFail,
} from "../Slice/loginSlice";

export const fetchUserData = () => async (dispatch) => {

    dispatch(getUserPending());

    try {
        const userData = JSON.parse(await AsyncStorage.getItem('userDump'))
      console.log("checking user state result", userData.jwt)

      // userData.length &&
        dispatch(getUserSuccess(userData));

    } catch (error) {
      dispatch(getUserFail(error.message));
    }
  };


  export const logOutUser = () => async (dispatch) => {
    dispatch(logoutPending());
    try {
         AsyncStorage.removeItem('userAuthToken')
         AsyncStorage.removeItem('userDump')

      dispatch(logoutSuccess());

    } catch (error) {
      dispatch(logoutFail(error.message));
    }
  };
