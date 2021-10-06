import { approvalLoanConstants } from '../_constants';
const initialState = {
    loading: false,
    loans: []
}
export function loanApprovals(state = initialState, action) {
    switch (action.type) {
        case approvalLoanConstants.APPROVAL_LOAN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case approvalLoanConstants.APPROVAL_LOAN_SUCCESS:
            return {
                loading: false,
                loans: action.payload,
            };
        case approvalLoanConstants.APPROVAL_LOAN_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
