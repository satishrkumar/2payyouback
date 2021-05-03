import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import Modal from "react-modal";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";
import edit from "../images/edit.svg";

export default function ViewDetails() {
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
      <h2 className="bold">View Details</h2>
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
            <p className="textAlignLeft bold">
              Requested Amount <img className="" src={edit} alt="image" />
            </p>
            <p className="textAlignLeft">£ 1000</p>
          </div>

          <div className="form-group">
            <p className="textAlignLeft bold">
              Offered Interest Rate <img className="" src={edit} alt="image" />
            </p>
            <p className="textAlignLeft">2% / PM</p>
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
            <p className="textAlignLeft bold">
              Repayment Frequency <img className="" src={edit} alt="image" />
            </p>
            <p className="textAlignLeft">Monthly</p>
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">
              Loan Date of Completion{" "}
              <img className="" src={edit} alt="image" />
            </p>
            <p className="textAlignLeft">1-12-2021</p>
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">Amount receivable per term</p>
            <p className="textAlignLeft">£ 1000</p>
          </div>
          <div className="form-group">
            <p className="textAlignLeft bold">
              Total amount receivable by end of term
            </p>
            <p className="textAlignLeft">£ 10000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
