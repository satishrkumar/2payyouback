import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLoanActions } from "../_actions";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

export default function LoanDetauseEffectils() {
  const user = useSelector((state) => state.authentication.user);

  const repaymentResponse = useSelector((state) => state.loanrequest.items);
  const loanFromState = useSelector((state) => state.loanrequest);
  const loanrequestFromState = !!loanFromState ? loanFromState.loan : undefined;

  const dispatch = useDispatch();
  const options = [
    {
      label: "Daily",
      value: "Daily",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
    {
      label: "Quarterly",
      value: "Quarterly",
    },
    {
      label: "Annualy",
      value: "Annualy",
    },
  ];

  const currency = ["£", "$", "Others..."];
  var [loanrequest, setLoan] = useState({
    currency: !!loanrequestFromState ? loanrequestFromState.currency : "",
    loanAmt: !!loanrequestFromState ? loanrequestFromState.loanAmt : "",
    borrowingReason: !!loanrequestFromState
      ? loanrequestFromState.borrowingReason
      : "",
    repaymentDate: !!loanrequestFromState
      ? loanrequestFromState.repaymentDate
      : "",
    rateOfInterest: !!loanrequestFromState
      ? loanrequestFromState.rateOfInterest
      : "",
    repayFrequency: !!loanrequestFromState
      ? loanrequestFromState.repayFrequency
      : "Monthly",
    loanTerm: !!loanrequestFromState ? loanrequestFromState.loanTerm : "",
  });
  useEffect(() => {
    //
    dispatch(userActions.getById(user.id));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoan((loanrequest) => ({ ...loanrequest, [name]: value }));
    console.log("requestloan loanrequest", loanrequest.rateOfInterest);
  }
  function handleBlur(e) {
    const { name, value } = e.target;
    setLoan((loanrequest) => ({ ...loanrequest, [name]: value }));
    console.log("requestloan loanrequest", loanrequest.rateOfInterest);

    termDiff();
    calculateRepayment(loanrequest);
  }
  function termDiff() {
    var repayDate = document.getElementById("repaymentDate").value;
    if (repayDate !== null && repayDate !== "") {
      var todaysDate = new Date();
      var futureDate = new Date(repayDate);
      var mDiff = monthDiff(todaysDate, futureDate);

      if (document.getElementById("repayFrequency").value === "Monthly") {
        document.getElementById("loanTerm").value = mDiff;
      } else if (document.getElementById("repayFrequency").value === "Daily") {
        var dayDiff = Math.round(
          (futureDate.getTime() - todaysDate.getTime()) / (1000 * 3600 * 24)
        );
        document.getElementById("loanTerm").value = dayDiff;
      } else if (
        document.getElementById("repayFrequency").value === "Quarterly"
      ) {
        var qDiff = mDiff / 3 < 1 ? 0 : Math.round(mDiff / 3);
        document.getElementById("loanTerm").value = qDiff;
      } else if (
        document.getElementById("repayFrequency").value === "Annualy"
      ) {
        var yDiff = mDiff / 12 < 1 ? 0 : Math.round(mDiff / 12);
        document.getElementById("loanTerm").value = yDiff;
      }
      loanrequest.loanTerm = document.getElementById("loanTerm").value;
      if (loanrequest.loanTerm === "0") {
        document.getElementById("repaymentAmount").value = "";
      }
    }
  }

  function monthDiff(d1, d2) {
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

  function calculateRepayment(loan) {
    //
    //if (validateParams(e)) {
    if (loan.repayFrequency === "Monthly") {
      dispatch(requestLoanActions.calculateMonthlyPayment(loan));
    } else if (loanrequest.repayFrequency === "Daily") {
      dispatch(requestLoanActions.calculateDailyPayment(loan));
    } else if (loanrequest.repayFrequency === "Quarterly") {
      dispatch(requestLoanActions.calculateQuarterlyPayment(loan));
    } else if (loanrequest.repayFrequency === "Annualy") {
      dispatch(requestLoanActions.calculateYearlyPayment(loan));
    }
    //}
  }

  return (
    <div className="step1 loanDetails">
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
              value={loanrequest.currency}
              onChange={handleChange}
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
              id="loanAmt"
              value={loanrequest.loanAmt}
              onChange={handleChange}
              onBlur={handleBlur}
              className={"form-control"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Frequency</p>
            <div className="textAlignLeft">
              <select
                name="repayFrequency"
                id="repayFrequency"
                className={"form-control ldDate"}
                value={loanrequest.repayFrequency}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              Tell the reason for borrowing money?
            </p>
            <textarea
              value={loanrequest.borrowingReason}
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
              id="repaymentDate"
              value={loanrequest.repaymentDate}
              onChange={handleChange}
              onBlur={handleBlur}
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
              value={loanrequest.loanTerm}
              onChange={handleBlur}
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
              id="rateOfInterest"
              value={loanrequest.rateOfInterest}
              onBlur={handleBlur}
              onChange={handleChange}
              className={"form-control ldDate"}
            />
            <div className="form-group">
              <p className="textAlignLeft bold">Loan Repayment Amount</p>
              <input
                type="text"
                name="repaymentAmount"
                id="repaymentAmount"
                value={
                  !!repaymentResponse ? repaymentResponse.repaymentAmount : ""
                }
                className={"form-control inputWidth"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
