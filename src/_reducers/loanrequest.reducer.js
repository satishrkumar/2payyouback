import { requestLoanConstants } from '../_constants';

export function loanrequest(state = {}, action) {
    switch (action.type) {
       case requestLoanConstants.REQLOAN_REQUEST:
        return {
            loan: action.loan
        };
        case requestLoanConstants.REQLOAN_SUCCESS:
            return {
                items: action.loan
            };
        case requestLoanConstants.REQLOAN_FAILURE:
            return {
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