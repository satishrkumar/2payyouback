import React  from "react";
import success from "../images/approve a loan-icon.svg";
import pending from "../images/request a loan-icon.svg";
import reject from "../images/request a loan-icon.svg";
import {useDispatch} from "react-redux";
import {approveLoanActions} from "../_actions";

export default function LoanRequest({id, borrowerEmailId, principal,apr, repaymentDate,reasonForBorrow, loanState }) {

  const dispatch = useDispatch();

  const cardBg = {
    background: "#F8FBFF",
    borderColor: "#CDCDCD",
  };

  const borderStyle = {
    borderRight: "ridge",
  };
  return (
      <div className="card w-80 mb-2" style={cardBg}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <p className="card-title bold">Borrower Name / Mail ID</p>
              <p className="card-text">{borrowerEmailId}</p>
            </div>
            <div className="col-md-3">
              <p className="card-title bold">Requested Amount</p>
              <p className="card-text">£ {principal}</p>
            </div>
            <div className="col-md-3">
              <p className="card-title bold">Offered Interest Rate</p>
              <p className="card-text">{apr}%</p>
            </div>
            <div className="col-md-3">
              {loanState === 'PENDING' ?
                  <img className="w-25 yellow" src={pending} alt="image"/> :
                  loanState === "APPROVED" ?
                      <img className="w-25" src={success} alt="image"/> :
                      <img className="successImg" src={reject} alt="image"/>
              }

              <p className="card-text bold">{loanState}</p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-3">
            <p className="card-title bold">Loan Date of Completion : </p>
            <p className="card-text">{repaymentDate} </p>
            </div>
            <div className="col-md-3">
              <p className="card-title bold">Reason For Borrow </p>
              <p className="card-text">{reasonForBorrow} </p>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-3" style={borderStyle}>
              <a href="#" className="btn btn-success" onClick={() => dispatch(approveLoanActions.approveLoanById(id))}>
                Accept
              </a>
            </div>
            <div className="col-md-3" style={borderStyle}>
              <a href="#" className="btn btn-danger" onClick={() => dispatch(approveLoanActions.rejectLoanById(id))}>
                Reject
              </a>
            </div>
            <div className="col-md-3" style={borderStyle}>
              <a href="#" className="btn btn-info">
                View Details
              </a>
            </div>
            <div className="col-md-3">
              <a
                  href="#"
                  className="btn btn-primary"
              >
                Renegotiate
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
