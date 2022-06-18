import { apiMain } from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

const pageNumber = 0;


export const getAllTransactions = async () => {
    try {
      const token = JSON.parse(await AsyncStorage.getItem('userAuthToken'))
      if (!isEmpty(token)) {
        const res = await apiMain.get(`transactions/0`, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
      console.log("Get All transaction history service", res.data);
      return res.data
      } else {
        console.log("report transaction history here...........no token");
      }
  
    } 
    catch (error) {
      console.log("get get transaction history error", error)
    }
  }
  




