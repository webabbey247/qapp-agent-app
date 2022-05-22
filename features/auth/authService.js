import apiConfig from "../../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";


// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await apiConfig.post("/login/", userData);
  const resultData = response.data;
  if (resultData.success == false) {
    if (resultData.status == 0) {
    //   console.log(resultData.message);
    } else if (resultData.message == 1) {
    //   console.log(resultData.message);
    }
  } else {
    AsyncStorage.setItem("user", resultData.result);
    // console.log(resultData.message);
  }
  return resultData;
};

//Enrol User Online Banking
const enrolOnlineAccess = async (userData) => {
    const response = await apiConfig.post("/consumers/activate-account-for-int-banking", userData);
    const resultData = response.data;
    console.log(resultData.message);
    return resultData;
  };


const logout = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

const authService = {
  register,
  login,
  enrolOnlineAccess,
  logout,
};

export default authService;
