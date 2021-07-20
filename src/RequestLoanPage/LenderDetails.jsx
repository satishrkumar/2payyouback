import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoanActions } from "../_actions";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";
import avatar from "../images/avatar.png";
import avatar2 from "../images/avatar2.png";

import { render } from "react-dom";

export default function RepaymentDetails() {
  const repaymentResponse = useSelector((state) => state.loanrequest.items);
  const user = useSelector((state) => state.authentication.user);
  const loan = localStorage.getItem("baseLoan");
  const [repaymentDetails, setRepaymentDetails] = useState({
    repaymentFrequency: "",
    repaymentAmount: "",
    totalInterest: "",
    totalLoanPayable: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getById(user.id));
    debugger;
    var baseLoan = JSON.parse(loan);
    if (baseLoan.repayFrequency === "Monthly") {
      dispatch(requestLoanActions.calculateMonthlyPayment(loan));
    } else if (baseLoan.repayFrequency === "Daily") {
      dispatch(requestLoanActions.calculateDailyPayment(loan));
    } else if (baseLoan.repayFrequency === "Quarterly") {
      dispatch(requestLoanActions.calculateQuarterlyPayment(loan));
    } else if (baseLoan.repayFrequency === "Annualy") {
      dispatch(requestLoanActions.calculateYearlyPayment(loan));
    }
  }, []);

  return (
    <div className="step3 lenderDetails">
      <h2 className="bold">Lender Details</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            className="leftpannelImg"
            src={loanRepaymentDetailImg}
            alt="image"
          />
        </div>
        <div className="col-md-6 marginLeft lenderdetails">
        <input
              type="text"
              name="loanAmt"
              placeholder="Enter Email ID/ Mobile Number"
              className={"form-control"}
            />
            <div className="lender">
                 <div className="row">
                 <div className="lenderavatar">
                 <img className="iconClass avatar" src={avatar} />
                 </div>
                 <div className="lenderemail">  <label className="labelAlignLeft">raja pidugu<br/>raja@gmail.com</label>
                 </div>
                 <div className="lenderbox">
                 <input type="checkbox" id=""  
                />
                 </div>
               </div>
      
               <div className="row">
                 <div className="lenderavatar">
                 <img className="iconClass avatar" src={avatar2} />
                 </div>
                 <div className="lenderemail">  <label className="labelAlignLeft">nandini valluri<br/>nandinivalluri@gmail.com</label>
                 </div>
                 <div className="lenderbox">
                 <input type="checkbox" id=""  
                />
                 </div>
               </div>
            
               </div>
            
        </div>
      </div>
    </div>
    
  );
}
