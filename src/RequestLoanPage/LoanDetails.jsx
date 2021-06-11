import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoanActions } from "../_actions";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

export default function LoanDetauseEffectils() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const loandata = localStorage.getItem('baseLoan');

  const dispatch = useDispatch();
  
  const repaymentResponse = useSelector((state) => state.loanrequest.items);
  const currency = ["£", "$", "Others..."];
  const [baseLoan, setLoan] = useState({
    currency: "",
    loanAmt: "",
    borrowingReason: "",
    repaymentDate: "",
    rateOfInterest:"",
    repayFrequency:"",
    loanTerm:""
  });
  useEffect(() => {
    debugger;
   // dispatch(requestLoanActions.calculateMonthlyPayment(loan));
    dispatch(userActions.getById(user.id));
    
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setLoan((baseLoan) => ({ ...baseLoan, [name]: value }));
   // debugger;
    console.log("requestloan checkbox name:", e.target.name);
    console.log("requestloan checkbox value:", e.target.value);
    localStorage.setItem('baseLoan', JSON.stringify(baseLoan));
  }

  function calculateRepayment(e) {
    
    var loan = JSON.stringify(baseLoan);
   if(baseLoan.repayFrequency==="Monthly"){
     dispatch(requestLoanActions.calculateMonthlyPayment(loan));
  } else if (baseLoan.repayFrequency==="Daily"){
     dispatch(requestLoanActions.calculateDailyPayment(loan));
  } else if (baseLoan.repayFrequency==="Quarterly"){
     dispatch(requestLoanActions.calculateQuarterlyPayment(loan));
  } else if (baseLoan.repayFrequency==="Annualy"){
     dispatch(requestLoanActions.calculateYearlyPayment(loan
      ));
  }
  debugger;
  }
  
  return (
    <div className="step1 loanDetails" >
      <h2 className="bold">Loan Details</h2>
      <div className="row">
        <div className="col-md-5">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-5 marginLeft">
          <p className="textAlignLeft bold">
            How much amount you want to borrow?
          </p>
          <div className="form-group ldInputLeft">
            <select
              name="currency"
              className={"form-control"}
              value={baseLoan.currency}
              onChange={handleChange}
              onBlur={handleChange}
            >
              {currency.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group ldInputRight">
            <input
              type="text"
              name="loanAmt"
              value={baseLoan.loanAmt}
              onChange={handleChange}
              className={"form-control"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Frequency</p>
            <div className="textAlignLeft" >
              <span className="paymentType">
                <input type="radio" id="Daily" name="repayFrequency" value="Daily" onSelect={handleChange} 
                onClick={handleChange} onBlur={calculateRepayment}/> Daily
              </span>
              <span className="paymentType">
                <input type="radio" id="Monthly" name="repayFrequency" value="Monthly" onSelect={handleChange} 
                onClick={handleChange} onBlur={calculateRepayment}/>{" "}
                Monthly
              </span>
              <span className="paymentType">
                <input type="radio" id="Quarterly"  name="repayFrequency" value="Quarterly" 
                onSelect={handleChange} onClick={handleChange} onBlur={calculateRepayment}/>{" "}
                Quarterly
              </span>
              <span className="paymentType">
                <input type="radio" id="Annualy" name="repayFrequency" value="Annualy" onSelect={handleChange} 
                onClick={handleChange} onBlur={calculateRepayment}/>{" "}
                Annualy
              </span>
            </div>
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              Tell the reason for borrowing money?
            </p>
            <textarea
              value={baseLoan.borrowingReason}
              onChange={handleChange}
              className={"form-control registerPageInput"}
              name="borrowingReason"
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              Estimated Date of loan repayment?
            </p>
            <input
              type="date"
              name="repaymentDate"
              value={baseLoan.repaymentDate}
              onChange={handleChange}
              className={"form-control ldDate"}
            />
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              What loan term you want to have?
            </p>
            <input
              type="text"
              name="loanTerm"
              value={baseLoan.loanTerm}
              onChange={handleChange} 
              className={"form-control ldDate"}
            />
          </div>
          <div className="form-group dw">

            <p className="textAlignLeft bold">
              What rate of intrest you want to give?
            </p>
            <input
              type="text"
              name="rateOfInterest"
              value={baseLoan.rateOfInterest}
              onChange={handleChange} 
              onBlur={handleChange}
              className={"form-control ldDate"}
            />
             <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Amount</p>
            <input
              type="text"
              name="repaymentAmount"
              onFocus={calculateRepayment}
              value={!!repaymentResponse ? repaymentResponse.repaymentAmount : ""}
              className={"form-control inputWidth"}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
