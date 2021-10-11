import {approvalLoanConstants} from '../_constants';

const initialState = {
    loading: false,
    loans: []
}

export function loanApprovals(state = initialState, action) {
    switch (action.type) {
        case approvalLoanConstants.PENDING_LOANS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case approvalLoanConstants.PENDING_LOANS_SUCCESS:
            return {
                loading: false,
                loans: action.payload,
            };
        case approvalLoanConstants.PENDING_LOANS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        case approvalLoanConstants.APPROVE_LOAN_REQUEST:
            return {
                ...state,
            };
        case approvalLoanConstants.APPROVE_LOAN_SUCCESS: {
            const {id} = action.payload
            return {
                ...state,
                loans: state.loans.map(loan => loan.id === id ? action.payload : loan)
            };
        }
        case approvalLoanConstants.REJECT_LOAN_REQUEST:
            return {
                ...state
            }
        case approvalLoanConstants.REJECT_LOAN_SUCCESS: {
            const {id} = action.payload
            console.log(action.payload)
            return {
                ...state,
                loans: state.loans.map(loan => loan.id === id ? action.payload : loan)
            };
        }
        default:
            return state
    }
}
