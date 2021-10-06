import React  from "react";
import "../css/homepage.css";
import success from "../images/success.svg";

export default function LoanRequest({borrowerEmailId, principal,interest, repaymentDate,reasonForBorrow }) {

  const cardBg = {
    background: "#F8FBFF",
    borderColor: "#CDCDCD",
  };

  const borderStyle = {
    borderRight: "ridge",
  };
  return (
      <div className="card w-80" style={cardBg}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <p className="card-text bold">{borrowerEmailId}</p>
            </div>
            <div className="col-md-3">
              <p className="card-title bold">Requested Amount</p>
              <p className="card-text">£ {principal}</p>
            </div>
            <div className="col-md-3">
              <p className="card-title bold">Offered Interest Rate</p>
              <p className="card-text">{interest}%</p>
            </div>
            <div className="col-md-3">
              <img className="successImg" src={success} alt="image"/>
              <p className="card-text bold">Accept</p>
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
            <div className="col-md-4" style={borderStyle}>
              <a href="#" className="btn btn-primary">
                Reject
              </a>
            </div>
            <div className="col-md-4" style={borderStyle}>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
            <div className="col-md-4">
              <a
                  href="#"
                  className="btn btn-primary"
                  // onClick={step1Renegotiate}
              >
                Renegotiate
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
