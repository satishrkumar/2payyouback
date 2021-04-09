import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import Modal from "react-modal";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";

export default function RepaymentDetails() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
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
    <div className="step3 loanDetails">
      <h2 className="bold">Loan Repayment Details</h2>
      <div className="row">
        <div className="col-md-5">
          <img
            className="leftpannelImg"
            src={loanRepaymentDetailImg}
            alt="image"
          />
        </div>
        <div className="col-md-5 marginLeft">
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Frequency</p>
            <div className="textAlignLeft" onChange={handleChange}>
              <span className="paymentType">
                <input type="radio" value="Daily" name="paymentMethod" /> Daily
              </span>
              <span className="paymentType">
                <input type="radio" value="Monthly" name="paymentMethod" />{" "}
                Monthly
              </span>
              <span className="paymentType">
                <input type="radio" value="Quarterly" name="paymentMethod" />{" "}
                Quarterly
              </span>
              <span className="paymentType">
                <input type="radio" value="Annualy" name="paymentMethod" />{" "}
                Annualy
              </span>
            </div>
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Repayment Amount</p>
            <input
              type="text"
              name="paymentMethod1"
              value={user.paymentMethod1}
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Service Charge Estimate</p>
            <input
              type="text"
              name="paymentMethod2"
              value={user.paymentMethod1}
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Loan Total Repayable</p>
            <input
              type="text"
              name="paymentMethod3"
              value={user.paymentMethod1}
              onChange={handleChange}
              className={"form-control inputWidth"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
