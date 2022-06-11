import { apiMain } from "../../utils/Config";

// Get Banks
const getAgentBanks = async () => {
    const response = await apiMain.get("/agent/banks");
    console.log("Get agent bank response log", response.data)
    return response.data;
  };


  const mainService = {
    getAgentBanks,
  };
  
  export default mainService;
