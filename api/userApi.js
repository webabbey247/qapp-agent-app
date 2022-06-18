import { apiAuth } from "../utils/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const registerUrl = "/register";
const loginUrl = "/login";


export const userRegistration = (formData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await apiAuth.post(registerUrl, formData);
        resolve(res.data);
        if (res.data.success === true) {
          resolve(res.data);
        }
      } catch (error) {
        reject(error);
      }
    });
  };


  export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await apiAuth.post(loginUrl, frmData);

        resolve(res.data);

        if (res.data.success === true) {
          AsyncStorage.setItem('userDump', JSON.stringify(res.data.result))
          AsyncStorage.setItem('userAuthToken', JSON.stringify(res.data.result.jwt))
        }
      } catch (error) {
        reject(error);
      }
   });
  };



