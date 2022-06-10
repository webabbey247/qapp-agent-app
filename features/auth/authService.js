import { apiAuth } from "../../utils/Config";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Register user
const register = async (formData) => {
  const response = await apiAuth.post("/register", formData);
  console.log("Register response log", response.data)
  return response.data;
};

// Login user
const login = async (formData) => {
  const response = await apiAuth.post("/login", formData);
  console.log("Login response log", response.data)
  return response.data;
};


const logout = async (formData) => {
    const response = await apiAuth.post("/login/logout", formData);
    console.log("logout response log", response.data)
    return response.data;
  };


const authService = {
  register,
  login,
  logout
};

export default authService;
