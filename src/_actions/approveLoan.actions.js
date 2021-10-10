import {approvalLoanConstants} from '../_constants';
import {loandApprovalService} from '../_services';
import {toast} from "react-toastify";

export const approveLoanActions = {
    getAllLoanRequests,
    approveLoanById,
    rejectLoanById
};

function getAllLoanRequests(user) {
    return dispatch => {
        dispatch({type: approvalLoanConstants.PENDING_LOANS_REQUEST})
        const {emailId} = user
        loandApprovalService.getAllLoansForApproval(emailId).then((data) => {
            dispatch({type: approvalLoanConstants.PENDING_LOANS_SUCCESS, payload: data})
        }).catch(() => {
                toast.error("Unable To Process Request, Try Again Later")
                dispatch({type: approvalLoanConstants.PENDING_LOANS_FAILURE})
            }
        )
    }
}

function approveLoanById(loanId) {

    return dispatch => {
        toast.info("Got That Boss 😊, Working On It")
        dispatch({type: approvalLoanConstants.APPROVE_LOAN_REQUEST})
        loandApprovalService.approveLoanById(loanId).then((data) => {
            toast.success("Got The Papers Printed And Sent It To Your Email")
            dispatch({type: approvalLoanConstants.APPROVE_LOAN_SUCCESS, payload: data})
        }).catch(() => {
                toast.error("Darn It! We Ran Out Of Ink, Let's Try That Again Later?")
                dispatch({type: approvalLoanConstants.APPROVE_LOAN_FAILURE})
            }
        )
    }
}

function rejectLoanById(loanId) {
    toast.info("Got That Boss 🙁, Working On It")
    return dispatch => {
        dispatch({type: approvalLoanConstants.REJECT_LOAN_REQUEST})
        loandApprovalService.rejectLoanById(loanId).then((data) => {
            toast.success("Hmmm, That's Sad But It Went Through")
            dispatch({type: approvalLoanConstants.REJECT_LOAN_SUCCESS, payload: data})
        }).catch(() => {
            toast.error("Gosh! The Brokers Are Busy. Let's Try Again Later?")
                dispatch({type: approvalLoanConstants.REJECT_LOAN_FAILURE})
            }
        )
    }
}
