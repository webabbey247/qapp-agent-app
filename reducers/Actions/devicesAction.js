import { 
    fetchDevicePending, 
    fetchDeviceSuccess, 
    fetchDeviceFail 
 } from "../Slice/deviceSlice";
  
  import { getAllDevices } from "../../api/deviceApi";

 export const fetchAllDevice = (accountID) => async (dispatch) => {
    console.log("first level for account ID", accountID);

    try {
  
      dispatch(fetchDevicePending())
  
      const result = await getAllDevices(accountID);
      console.log("Second level for account ID", accountID);

  
      result.success === true
        ? dispatch(fetchDeviceSuccess(result.result.allAccountMachines))
        : dispatch(fetchDeviceFail(result.message));
  
      console.log("Result for all devices", result);
  
    } catch (error) {
  
      dispatch(fetchDeviceFail(error.message));
    }
  
  }

