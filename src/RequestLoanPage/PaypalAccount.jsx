import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

export default function LoanDetails() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  useEffect(() => {
    debugger;
    dispatch(userActions.getById(user.id));
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <div className="step4">
      <h5 className="bold">Summary Details</h5>
      <div className="row">
        <div className="col-md-4">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-6 marginLeft">
        <div className="row">
        <div className="col-md-12">
        <div className="form-group">
            <p className="labelText">Lender's Email ID's</p>
           <label className="labelAlignLeft">nandini.valluri@purviewservices.com, raja.pidugu@purviewservices.com</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
            <p className="labelText">Loan Amount</p>
            <label className="labelAlignLeft"><span>&euro;</span> 1000</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
            <p className="labelText">Offered Interest Rate</p>
            <label>2% /PM</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
            <p className="labelText">Reason for Borrowing</p>
            <label>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
          </div>
        </div>
       
        <div className="col-md-6">
       
          <div className="form-group">
            <p className="labelText">Repayment Frequency</p>
            <label>Monthly</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
            <p className="labelText">Amount Payable per month</p>
            <label><span>&euro;</span> 1000</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
            <p className="labelText">Total amount payable by end of term</p>
            <label><span>&euro;</span> 10000</label>
          </div>
        </div>
        </div>
        
        </div>
      </div>
    </div>
  );
}
