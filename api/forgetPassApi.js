import { apiAuth } from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isEmpty } from "lodash";

const forgetUrl = "/password/forgot-password";

export const forgetUserPass = async (formData) => {
    try {
      console.log("get reset form staryed starting here...........", formData);

      const res = await apiAuth.post(forgetUrl, formData);
      console.log("Get response after handshake service", res.data);
      return res.data
    } 
    catch (error) {
      console.log("get password error", error)
    }
  }
  