import { apiMain } from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

const pageNumber = 0;

const allBanksUrl = "/agents/onboarded-banks";
const activeBankUrl = "/agents/active-banks";
const approvedBankUrl = "/agents/approved-banks";
const onBoardBankUrl = "/agents/add-bank";



export const getAllBanks = async () => {
  console.log("getting banks starts here .......")
  try {
    const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))

    if (!isEmpty(token)) {
      const res = await apiMain.get(allBanksUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log("this is result", res.data)
    return res.data
  }
  else {
    console.log("report all banks errors here...........no token");
  }

  } catch (error) {
    console.log('Errror', error)
  }
};


export const onboardBank = async (formData) => {
  console.log("adding banks starts here .......", formData)
  try {
    const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))

    if (!isEmpty(token)) {
      const res = await apiMain.post(onBoardBankUrl, formData, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log("this is result", res.data)
    return res.data
  }
  else {
    console.log("report onboarding banks errors here...........no token");
  }

  } catch (error) {
    console.log('Errror', error)
  }
};



export const getActiveBanks = async () => {
  try {
    const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))
    console.log("get Active banks starting here...........", token);
    if (!isEmpty(token)) {
      const res = await apiMain.get(activeBankUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log("Get All active banks service", res.data);
    return res.data
    } else {
      console.log("report active here...........no token");
    }

  } 
  catch (error) {
    console.log("get active banks error", error)
  }
}



export const getApprovedBanks = async () => {
  try {
    const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))
    console.log("get Approved banks starting here...........", token);
    if (!isEmpty(token)) {
      const res = await apiMain.get(approvedBankUrl, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log("Get All Approved banks service", res.data);
    return res.data
    } else {
      console.log("report approved here...........no token");
    }
  } 
  catch (error) {
    console.log("get approved banks error", error)
  }
}


export const getPendingBanks = async () => {
  try {
    const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))
    console.log("get Active banks starting here...........", token);
    if (!isEmpty(token)) {
      const res = await apiMain.get("/agents/pending-banks", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    console.log("Get All pending banks service", res.data);
    return res.data
    } else {
      console.log("report pending here...........no token");
    }
  } 
  catch (error) {
    console.log("get pending banks error", error)
  }

}


