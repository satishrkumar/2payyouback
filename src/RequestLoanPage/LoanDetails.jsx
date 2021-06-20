import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoanActions } from "../_actions";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

export default function LoanDetauseEffectils() {
  const user = useSelector((state) => state.authentication.user);

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
    //debugger;
    dispatch(userActions.getById(user.id));    
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoan((baseLoan) => ({ ...baseLoan, [name]: value }));
    //debugger;
    console.log("requestloan checkbox name:", e.target.name);
    console.log("requestloan checkbox value:", e.target.value);
    localStorage.setItem('baseLoan', JSON.stringify(baseLoan));   
    calculateRepayment(e);
  }

  function validateParams(e){
    debugger;
    if(baseLoan.loanAmt === null || baseLoan.loanAmt ===""){
      return false;
    }else if(baseLoan.repayFrequency === null || baseLoan.repayFrequency ===""){
      return false;
    }else if(baseLoan.borrowingReason === null || baseLoan.borrowingReason ===""){
      return false;
    }else if(baseLoan.repaymentDate === null || baseLoan.repaymentDate ===""){
      return false;
    }else if(baseLoan.loanTerm === null || baseLoan.loanTerm ==="" || baseLoan.loanTerm==="0"){
      return false;
    }else if(baseLoan.rateOfInterest === null || baseLoan.rateOfInterest ===""){
      return false;
    }
    return true;
  }

  function termDiff(e){
    debugger;
    var repayDate = document.getElementById("repaymentDate").value;
    if(repayDate !== null && repayDate !==""){      
    var todaysDate = new Date();
    var futureDate = new Date(repayDate);
    var mDiff = monthDiff(todaysDate,futureDate);
    
   if(document.getElementById("repayFrequency2").checked){
      document.getElementById("loanTerm").value = mDiff;
    } else if (document.getElementById("repayFrequency1").checked){
      var dayDiff = Math.round((futureDate.getTime() - todaysDate.getTime())/(1000*3600*24));
      document.getElementById("loanTerm").value = dayDiff;
   } else if (document.getElementById("repayFrequency3").checked){
     var qDiff = (mDiff/3) < 1 ? 0 : Math.round(mDiff/3);
     document.getElementById("loanTerm").value = qDiff;
   } else if (document.getElementById("repayFrequency4").checked){
     var yDiff = (mDiff/12) < 1 ? 0 : Math.round(mDiff/12);
     document.getElementById("loanTerm").value = yDiff;
   }
   baseLoan.loanTerm = document.getElementById("loanTerm").value;
   if(baseLoan.loanTerm==="0") {
       document.getElementById("repaymentAmount").value ="";
        alert("pls select the correct repayment date");
   }
  }
  }

  function monthDiff(d1,d2){
    var months;
    var endYear = d2.getFullYear();
    var startYear = d1.getFullYear();
    console.log("endYear:", endYear);
    console.log("startYear:", startYear);
    months = (endYear - startYear) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

  function calculateRepayment(e) {
   // debugger;
   if( validateParams(e)){
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
}
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
              onBlur={calculateRepayment}
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
              onBlur={calculateRepayment}
              className={"form-control"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Frequency</p>
            <div className="textAlignLeft" >
              <span className="paymentType">
                <input type="radio" id="Daily" name="repayFrequency" id="repayFrequency1" value="Daily" 
                 onSelect={handleChange}
                onClick={handleChange} 
                onBlur={e => {termDiff(e);calculateRepayment(e)}}/> Daily
              </span>
              <span className="paymentType">
                <input type="radio" id="Monthly" name="repayFrequency" id="repayFrequency2" value="Monthly" 
                 onSelect={handleChange}
                 onClick={handleChange} onBlur={e => {termDiff(e);calculateRepayment(e)}}/>{" "}
                Monthly
              </span>
              <span className="paymentType">
                <input type="radio" id="Quarterly"  name="repayFrequency" id="repayFrequency3" value="Quarterly" 
                 onSelect={handleChange}
                onClick={handleChange} onBlur={e => {termDiff(e);calculateRepayment(e)}}/>{" "}
                Quarterly
              </span>
              <span className="paymentType">
                <input type="radio" id="Annualy" name="repayFrequency" id="repayFrequency4" value="Annualy" 
                onSelect={handleChange}
                onClick={handleChange} onBlur={e => {termDiff(e);calculateRepayment(e)}}/>{" "}
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
              onBlur={calculateRepayment}
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
              id="repaymentDate"
              value={baseLoan.repaymentDate}
              onChange={handleChange}
              onBlur={e=>{termDiff(e);calculateRepayment(e)}}
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
              id="loanTerm"
              value={!!baseLoan ? baseLoan.loanTerm : ""}
              onBlur={calculateRepayment}
              className={"form-control ldDate"}
              readOnly
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
              onBlur={calculateRepayment}
              onBlur={handleChange}
              className={"form-control ldDate"}
            />
             <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Amount</p>
            <input
              type="text"
              name="repaymentAmount"
              id="repaymentAmount"
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
