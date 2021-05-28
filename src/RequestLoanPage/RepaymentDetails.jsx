import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoanActions } from "../_actions";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";
import Async from 'react-async';

import { render } from "react-dom";

export default function RepaymentDetails() {
  const repaymentResponse = useSelector((state) => state.loanrequest.items);
  const user = useSelector((state) => state.authentication.user);
  const loan = localStorage.getItem('baseLoan');
  const [repaymentDetails, setRepaymentDetails] = useState({
    repaymentFrequency:"",
    repaymentAmount: "",
    totalInterest: "",
    totalLoanPayable: ""
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getById(user.id));
    dispatch(requestLoanActions.calculateMonthlyPayment(loan));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setRepaymentDetails((repaymentDetails) => ({ ...repaymentDetails, [name]: value }));
    console.log("checkbox checked:", e.target.value);
  }


  return (
    <div className="step3 loanDetails">
      <h2 className="bold">Loan Repayment Details</h2>
      <div className="row">
        
        <div className="col-md-4">
          <img
            className="leftpannelImg"
            src={loanRepaymentDetailImg}
            alt="image"
          />
        </div>
        <div className="col-md-6 marginLeft">
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Frequency</p>
            <input
              type="text"
              name="repaymentFrequency"
              value={!!repaymentResponse ? repaymentResponse.repaymentFrequency : ""}
              readOnly
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Principal Amount</p>
            <input
              type="text"
              name="repaymentAmount"
              value={!!repaymentResponse ? repaymentResponse.principalAmount : ""}
              readOnly
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Amount</p>
            <input
              type="text"
              name="repaymentAmount"
              value={!!repaymentResponse ? repaymentResponse.repaymentAmount : ""}
              readOnly
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Total Interest For Loan</p>
            <input
              type="text"
              name="totalInterest"
              value={!!repaymentResponse ? repaymentResponse.totalInterest : ""}
              readOnly
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Total Repayable</p>
            <input
              type="text"
              name="totalLoanPayable"
              value={!!repaymentResponse ? repaymentResponse.totalLoanPayable : ""}
              readOnly
              className={"form-control inputWidth"}
            />
          </div>
        </div>
      </div>
      </div>
  );
}
