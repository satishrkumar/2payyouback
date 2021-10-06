import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { loanrequest } from './loanrequest.reducer';
import { loanApprovals } from './loanApprovals.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    loanrequest,
    loanApprovals
});

export default rootReducer;
