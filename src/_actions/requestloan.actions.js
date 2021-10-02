import {requestLoanConstants} from '../_constants';
import {loanRequestService} from '../_services';
import {alertActions} from '.';
import {history} from "../_helpers";
import {toast} from "react-toastify";

export const requestLoanActions = {
    calculateMonthlyPayment,
    calculateQuarterlyPayment,
    calculateDailyPayment,
    calculateYearlyPayment,
    addLenders,
    submitLoanRequest
};

function submitLoanRequest(user, loan) {

    const data = {
        loanRequest: {
            borrower: {
                emailId: user.emailId
            },
            lender: {
                emailId: loan.lenders[0]
            },
            loanAmt: parseInt(loan.loan.loanAmt),
            loanTerm: parseInt(loan.loan.loanTerm),
            rateOfInterest: parseFloat(loan.loan.rateOfInterest),
            reasonForBorrow: loan.loan.borrowingReason,
            repayFrequency: loan.loan.repayFrequency,
            repaymentDate: loan.loan.repaymentDate
        }
    }
    loanRequestService.requestLoan(JSON.stringify(data)).then(() => {
        toast.success("Loan Request Submitted")
        history.push("/HomePage")
    }).catch(() => {
            toast.error("Unable To Process Request, Try Again Later")
        }
    )
}

function addLenders(emails) {
    return {
        type: requestLoanConstants.UPDATE_LENDERS,
        payload: emails
    }
}

function calculateMonthlyPayment(loan) {
    return dispatch => {
        dispatch(request(loan));
        if (validateParams(loan)) {
            loanRequestService.calculateMonthlyPayment(JSON.stringify(loan))
                .then(
                    loan => {
                        dispatch(success(loan));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        }
    };

}


function calculateQuarterlyPayment(loan) {
    return dispatch => {
        dispatch(request(loan));
        if (validateParams(loan)) {
            loanRequestService.calculateQuarterlyPayment(JSON.stringify(loan))
                .then(
                    loan => {
                        dispatch(success(loan));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        }
    };
}

function calculateDailyPayment(loan) {
    return dispatch => {
        dispatch(request(loan));
        if (validateParams(loan)) {
            loanRequestService.calculateDailyPayment(JSON.stringify(loan))
                .then(
                    loan => {
                        dispatch(success(loan));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        }
    };
}


function calculateYearlyPayment(loan) {
    return dispatch => {
        dispatch(request(loan));
        if (validateParams(loan)) {
            loanRequestService.calculateYearlyPayment(JSON.stringify(loan))
                .then(
                    loan => {
                        dispatch(success(loan));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        }
    };

}

function validateParams(loanrequest) {
    if (loanrequest.loanAmt === null || loanrequest.loanAmt === "") {
        return false;
    } else if (loanrequest.repayFrequency === null || loanrequest.repayFrequency === "") {
        return false;
    } else if (loanrequest.borrowingReason === null || loanrequest.borrowingReason === "") {
        return false;
    } else if (loanrequest.repaymentDate === null || loanrequest.repaymentDate === "") {
        return false;
    } else if (loanrequest.loanTerm === null || loanrequest.loanTerm === "" || loanrequest.loanTerm === "0") {
        return false;
    } else if (loanrequest.rateOfInterest === null || loanrequest.rateOfInterest === "") {
        return false;
    }
    return true;
}

function request(loan) {
    return {type: requestLoanConstants.REQLOAN_REQUEST, loan}
}

function success(loan) {
    return {type: requestLoanConstants.REQLOAN_SUCCESS, loan}
}

function failure(error) {
    return {type: requestLoanConstants.REQLOAN_FAILURE, error}
}
