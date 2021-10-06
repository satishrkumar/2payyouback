import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveLoanActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

import LoanRequest from "./LoanRequest";

export default function LoanRequestDetails() {
  const user = useSelector((state) => state.authentication.user);
  const loansStore = useSelector((state) => state.loanApprovals);
  const dispatch = useDispatch();


  useEffect(() => {
    //dispatch(userActions.getById(user.id));
    //console.log(user.emailId)
    dispatch(approveLoanActions.getAllLoanRequests(user))
  }, []);

  return (
    <div className="step1 loanRequestDetails">
      <h2 className="bold">Loan Requests</h2>
      <div className="row">
        <div className="col-md-4">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-8 ">
          {
            loansStore.loading ? <h1>Loading ...</h1> : (
                loansStore.loans && loansStore.loans.map(loan => (
                    <LoanRequest {...loan}/>
                    )
                )
            )
          }

        </div>
      </div>
    </div>
  );
}
