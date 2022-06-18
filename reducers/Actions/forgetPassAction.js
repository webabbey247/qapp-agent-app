// import { 
//     validateEmailPending,
//     validateEmaillSuccess,
//     validateEmailFail,
//     validateOTPPending,
//     validateOTPSuccess,
//     validateOTPFail,
//     validateNewPassPending,
//     validateNewPassSuccess,
//     validateNewPassFail

// } from "../Slice/forgetPassSlice";
  
// //   import { forgetUserPass } from "../../api/forgetPassApi";
  
// //   export const newUserRegistration = (frmDt) => async (dispatch) => {
// //     try {

// //       dispatch(validateEmailPending());
  
// //       const result = await forgetUserPass(frmDt);

// //       result.status === "success"
// //         ? dispatch(validateEmaillSuccess(result.message))
// //         : dispatch(validateEmailFail(result.message));
  
// //       console.log(result);

// //     } catch (error) {
// //       dispatch(registrationError(error.message));
// //     }
    
// //   };