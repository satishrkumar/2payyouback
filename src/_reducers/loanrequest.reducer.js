import { requestLoanConstants } from '../_constants';

export function loanrequest(state = {}, action) {
    switch (action.type) {

        case requestLoanConstants.UPDATE_LENDERS: {
            return {
                ...state,
                lenders: action.payload
            }
        }
        case requestLoanConstants.REQLOAN_REQUEST:
            return {
                ...state,
                loan: action.loan
            };
        case requestLoanConstants.REQLOAN_SUCCESS:
            return {
                ...state,
                items: action.loan
            };
        case requestLoanConstants.REQLOAN_FAILURE:
            return {
                ...state,
                error: action.error
            };
        case requestLoanConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.id
                        ? { ...user, deleting: true }
                        : user
                )
            };

        default:
            return state
    }
}
