import { apiAuth } from "../../utils/config";

// Register user
const register = async (formData) => {
  const response = await apiAuth.post("/register", formData);
  console.log("Register response log", response.data)
  return response.data;
};

// Forget password
const forgetPass = async (formData) => {
    const response = await apiAuth.post("/password/forgot-password", formData);
    console.log("Forget Password response log", response.data)
    return response.data;
  };


// Login user
const login = async (formData) => {
  const response = await apiAuth.post("/login", formData);
  console.log("Login response log", response.data)
  return response.data;
};



const authService = {
  register,
  forgetPass,
  login,
};

export default authService;
