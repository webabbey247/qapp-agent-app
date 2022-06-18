import {
  postOnboardBankPending,
  postOnboardBankSuccess,
  postOnboardBankFail,
  fetchBankPending,
  fetchBankSuccess,
  fetchBankFail,
  fetchActiveBankPending,
  fetchActiveBankSuccess,
  fetchActiveBankFail,
  fetchPendingBankPending,
  fetchPendingBankSuccess,
  fetchPendingBankFail,
  fetchApprovedBankPending,
  fetchApprovedBankSuccess,
  fetchApprovedBankFail,
} from "../Slice/bankSlice";

import { onboardBank, getAllBanks, getActiveBanks, getPendingBanks, getApprovedBanks } from "../../api/bankApi";


export const postOnboardBanks = () => async (dispatch) => {
  try {

    dispatch(postOnboardBankPending())

    const result = await onboardBank();

    dispatch(postOnboardBankSuccess(result))

    result.success === true
      ? dispatch(postOnboardBankSuccess(result))
      : dispatch(postOnboardBankFail(result));

    console.log("Result for submitted onboarded banks", result);

  } catch (error) {
    dispatch(postOnboardBankFail(error.message));
  }
}


export const fetchAllBanks = () => async (dispatch) => {
  try {

    dispatch(fetchBankPending())

    const result = await getAllBanks();

    dispatch(fetchBankSuccess(result))

    // result.success === true
    //   ? dispatch(fetchBankSuccess(result))
    //   : dispatch(fetchBankFail(result));

    console.log("Result for all onboarded banks", result);

  } catch (error) {
    dispatch(fetchBankFail(error.message));
  }
}


export const fetchActiveBanks = () => async (dispatch) => {
  try {

    dispatch(fetchActiveBankPending())

    const result = await getActiveBanks();

    result.success === true
      ? dispatch(fetchActiveBankSuccess(result.result))
      : dispatch(fetchActiveBankFail(result.message));

    console.log("Result for active banks", result);

  } catch (error) {

    dispatch(fetchActiveBankFail(error.message));
  }
}

export const fetchApprovedBanks = () => async (dispatch) => {
  try {

    dispatch(fetchApprovedBankPending())

    const result = await getApprovedBanks();

    result.success === true
      ? dispatch(fetchApprovedBankSuccess(result.result))
      : dispatch(fetchApprovedBankFail(result.message));

    console.log("Result for active banks", result);

  } catch (error) {

    dispatch(fetchApprovedBankFail(error.message));
  }
}



export const fetchPendingBanks = () => async (dispatch) => {
  try {

    dispatch(fetchPendingBankPending())

    const result = await getPendingBanks();

    result.success === true
      ? dispatch(fetchPendingBankSuccess(result.result))
      : dispatch(fetchPendingBankFail(result.message));

    console.log("Result for pending banks", result);

  } catch (error) {

    dispatch(fetchPendingBankFail(error.message));
  }
}
