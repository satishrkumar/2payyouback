import { requestLoanConstants } from '../_constants';
import { loanRequestService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const requestLoanActions = {
    calculateMonthlyPayment,
    calculateQuarterlyPayment,
    calculateDailyPayment,
    calculateYearlyPayment
};

function calculateMonthlyPayment(loan) {
    return dispatch => {
        dispatch(request({ loan }));

        loanRequestService.calculateMonthlyPayment(loan)
        
            .then(
                loan => {
                    dispatch(success(loan));
                    history.push(loan);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(loan) { return { type: requestLoanConstants.REQLOAN_REQUEST, loan } }
    function success(loan) { return { type: requestLoanConstants.REQLOAN_SUCCESS, loan } }
    function failure(error) { return { type: requestLoanConstants.REQLOAN_FAILURE, error } }
 
}


function calculateQuarterlyPayment(loan) {
    return dispatch => {
        dispatch(request(loan));

        loanRequestService.calculateQuarterlyPayment(loan)
            .then(
                loan => {
                    dispatch(success(loan));
                    history.push(loan);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(loan) { return { type: requestLoanConstants.REQLOAN_REQUEST, loan } }
    function success(loan) { return { type: requestLoanConstants.REQLOAN_SUCCESS, loan } }
    function failure(error) { return { type: requestLoanConstants.REQLOAN_FAILURE, error } }
}

function calculateDailyPayment(loan) {
    return dispatch => {
        dispatch(request(user));

        loanRequestService.calculateDailyPayment(loan)
            .then(
                user => {
                    dispatch(success(loan));
                    history.push(loan);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(loan) { return { type: requestLoanConstants.REQLOAN_REQUEST, loan } }
    function success(loan) { return { type: requestLoanConstants.REQLOAN_SUCCESS, loan } }
    function failure(error) { return { type: requestLoanConstants.REQLOAN_FAILURE, error } }
}


function calculateYearlyPayment(loan, from) {
    return dispatch => {
        dispatch(request(loan));

        loanRequestService.calculateYearlyPayment(loan)
            .then(
                loan => {
                    dispatch(success(loan));
                    history.push(loan);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(loan) { return { type: requestLoanConstants.REQLOAN_REQUEST, loan } }
    function success(loan) { return { type: requestLoanConstants.REQLOAN_SUCCESS, loan } }
    function failure(error) { return { type: requestLoanConstants.REQLOAN_FAILURE, error } }
}

