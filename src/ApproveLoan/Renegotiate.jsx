import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";

import loanRepaymentDetailImg from "../images/loan_repayment_details.png";

export default function Renegotiate() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

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

  return (
    <div className="step3 loanRequestDetails">
      <h2 className="bold"> Details</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            className="leftpannelImg"
            src={loanRepaymentDetailImg}
            alt="image"
          />
        </div>
        <div className="col-md-4 ">
          <div className="form-group">
            <p className="textAlignLeft bold">Borrower Name</p>
            <p className="textAlignLeft">Henry</p>
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Requested Amount </p>
            <input
              type="text"
              name="paymentMethod1"
              value="£ 1000"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>

          <div className="form-group">
            <p className="textAlignLeft bold">Offered Interest Rate </p>
            <input
              type="text"
              name="paymentMethod1"
              value="2% / PM"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Reason for Borrowing</p>

            <p className="textAlignLeft">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <p className="textAlignLeft bold">Repayment Frequency</p>
            <input
              type="text"
              name="paymentMethod1"
              value="Monthly"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Date of Completion </p>
            <input
              type="date"
              name="paymentMethod1"
              value="1-12-2021"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Amount receivable per term</p>
            <input
              type="text"
              name="paymentMethod1"
              value="£ 1000"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">
              Total amount receivable by end of term
            </p>
            <input
              type="text"
              name="paymentMethod1"
              value="£ 10000"
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
