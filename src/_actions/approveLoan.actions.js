import {approvalLoanConstants} from '../_constants';
import {loandApprovalService} from '../_services';
import {toast} from "react-toastify";

export const approveLoanActions = {
    getAllLoanRequests
};

function getAllLoanRequests(user) {
    return dispatch => {
        dispatch({type: approvalLoanConstants.APPROVAL_LOAN_REQUEST})
        const {emailId} = user
        loandApprovalService.getAllLoansForApproval(emailId).then((data) => {
            dispatch({type: approvalLoanConstants.APPROVAL_LOAN_SUCCESS, payload: data})
        }).catch(() => {
                toast.error("Unable To Process Request, Try Again Later")
                dispatch({type: approvalLoanConstants.APPROVAL_LOAN_FAILURE})
            }
        )
    }
}
