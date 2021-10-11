import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {approveLoanActions} from "../_actions";
import "../css/homepage.css";

import LoanRequest from "./LoanRequest";

export default function LoanRequestDetails() {
    const user = useSelector((state) => state.authentication.user);
    const loansStore = useSelector((state) => state.loanApprovals);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(approveLoanActions.getAllLoanRequests(user))
    }, []);

    return (
        <div className="step1 loanRequestDetails">
                {
                    loansStore.loading ? <h1>Loading ...</h1> : (
                        loansStore.loans && loansStore.loans.map(loan => (
                                <LoanRequest id={loan.id} {...loan}/>
                            )
                        )
                    )
                }
        </div>
    );
}
