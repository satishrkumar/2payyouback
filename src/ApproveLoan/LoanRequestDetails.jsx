import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";
import success from "../images/success.svg";

export default function LoanRequestDetails() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const cardBg = {
    background: "#F8FBFF",
    borderColor: "#CDCDCD",
  };

  const successImg = {
    width: "70px",
    marginTop: "30px",
  };

  const borderStyle = {
    borderRight: "ridge",
  };

  const currency = ["£", "$", "Others..."];
  useEffect(() => {
    debugger;
    dispatch(userActions.getById(user.id));
  }, []);
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
    console.log("checkbox checked:", e.target.value);
  }

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  function step1Renegotiate() {
    alert("hi");
  }

  return (
    <div className="step1 loanRequestDetails">
      <h2 className="bold">Loan Request Details</h2>
      <div className="row">
        <div className="col-md-4">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-8 ">
          <div className="card w-80" style={cardBg}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <p className="card-text bold">Henry</p>
                </div>
                <div className="col-md-3">
                  <p className="card-title bold">Requested Amount</p>
                  <p className="card-text">£ 1000</p>
                </div>
                <div className="col-md-3">
                  <p className="card-title bold">Offered Interest Rate</p>
                  <p className="card-text">2%</p>
                </div>
                <div className="col-md-3">
                  <img className="successImg" src={success} alt="image" />
                  <p className="card-text bold">Accept</p>
                </div>
              </div>
              <br />
              <div className="row">
                <p className="card-title bold">Loan Date of Completion : </p>
                <p className="card-text"> 01-12-2021 </p>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4" style={borderStyle}>
                  <a href="#" class="btn btn-primary">
                    Reject
                  </a>
                </div>
                <div className="col-md-4" style={borderStyle}>
                  <a href="#" class="btn btn-primary">
                    View Details
                  </a>
                </div>
                <div className="col-md-4">
                  <a
                    href="#"
                    class="btn btn-primary"
                    onClick={step1Renegotiate}
                  >
                    Renegotiate
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div className="card w-80" style={cardBg}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <p className="card-text bold">Henry</p>
                </div>
                <div className="col-md-3">
                  <p className="card-title bold">Requested Amount</p>
                  <p className="card-text">£ 1000</p>
                </div>
                <div className="col-md-3">
                  <p className="card-title bold">Offered Interest Rate</p>
                  <p className="card-text">2%</p>
                </div>
                <div className="col-md-3">
                  <img className="successImg" src={success} alt="image" />
                  <p className="card-text bold">Accept</p>
                </div>
              </div>
              <br />
              <div className="row">
                <p className="card-title bold">Loan Date of Completion : </p>
                <p className="card-text"> 01-12-2021 </p>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-4" style={borderStyle}>
                  <a href="#" class="btn btn-primary">
                    Reject
                  </a>
                </div>
                <div className="col-md-4" style={borderStyle}>
                  <a href="#" class="btn btn-primary">
                    View Details
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="#" class="btn btn-primary">
                    Renegotiate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
