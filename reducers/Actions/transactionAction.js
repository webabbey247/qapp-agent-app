import { 
    fetchTransactionPending, 
    fetchTransactionSuccess, 
    fetchTransactionFail 
 } from "../Slice/transactionSlice";
  
  import { getAllTransactions } from "../../api/transactionsApi";

 export const fetchAllTransactions = () => async (dispatch) => {
     
    try {
  
      dispatch(fetchTransactionPending())
  
      const result = await getAllTransactions();
      console.log("transaction for account ID", result);
  
      result.success === true
        ? dispatch(fetchTransactionSuccess(result.result))
        : dispatch(fetchTransactionFail(result.message));
  
      console.log("Result for all transactions", result);
  
    } catch (error) {
  
      dispatch(fetchTransactionFail(error.message));
    }
  
  }

