import { apiMain } from "../../utils/config";

// Get Banks
const getAgentBanks = async () => {
    const response = await apiMain.get("/agent/banks");
    console.log("Get agent bank response log", response.data)
    return response.data;
};

const onboardBank = async (data) => {
  const response = await apiMain.post("/agent/add-bank", data.bankDataInfo, {
    headers: {
      "Authorization": `Bearer ${data.authToken}`
    },
  });
  console.log("Get agent bank response log", response.data)
  return response.data;
};





// Get Active Banks
// const getActiveBanks = async (token) => {
//   console.log("logging Active bank info", token)
//   return await apiMain.get("/agents/active-banks", {
//     headers: {
//       "Authorization": `Bearer ${token}`
//     },
//   });
// };

const getActiveBanks = async (token) => {
  const response = await apiMain.post("/agents/active-banks", token, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });
  console.log("Get active bank response log", response.data)
  return response.data;
};




// Get Approved Banks
const getApprovedBank = async (formdata) => {
  console.log("logging formdata", formdata)
  const response = await apiMain.get("/agents/approved-banks", {
    headers: {
      "Authorization": `Bearer ${formdata}`
    },
  });
  console.log("Get approved bank response log", response.data)
  return response.data;
};

// Get Pending Banks
const getPendingBanks = async (formdata) => {
  console.log("logging pending bank formdata", formdata)
  const response = await apiMain.get("/agents/pending-banks", {
    headers: {
      "Authorization": `Bearer ${formdata}`
    },
  });
  console.log("Get pending banks response log", response.data)
  return response.data;
};







  const mainService = {
    getAgentBanks,
    onboardBank,
    getApprovedBank,
    getPendingBanks,
    getActiveBanks
  };
  
  export default mainService;
