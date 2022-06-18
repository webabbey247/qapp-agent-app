import { apiMain } from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

const pageNumber = 0;


export const getAllDevices = async (accountID) => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))
      console.log("get all devices starting here...........", accountID);
      if (!isEmpty(token)) {
        const res = await apiMain.get(`/device/${accountID}/0`, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
      console.log("Get All devices service", res.data);
      return res.data
      } else {
        console.log("report devices here...........no token");
      }
  
    } 
    catch (error) {
      console.log("get get devices error", error)
    }
  }
  




