import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import approveLoanImg from "../images/approve a loan-icon.svg";
import requestLoanImg from "../images/request a loan-icon.svg";
import moreImg from "../images/more-icon.svg";
import notificationBellImg from "../images/notification-bell.svg";
import settingImg from "../images/settings.svg";

export default function Header() {
  //const user = useSelector((state) => state.user);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
/*
  useEffect(() => {
    {
      !!user ? dispatch(userActions.getById(user.id)) : "";
    }
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

 */

  return (
    <header className="headerClass">
      <div className="row">
        <div className="col-md-4">
          <h2 className="bold">Hello, {!!user ? user.firstName : ""}!</h2>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Search for..."
            name="search"
            value={!!user ? user.search : ""}
            className={"form-control"}
          />
        </div>
        <div className="col-md-5 textAlign">
          <span className="headerIcon">
            <img src={approveLoanImg} alt="image" />
            <p>Approve a Loan</p>
          </span>
          <span className="headerIcon">
            <img src={requestLoanImg} alt="image" />
            <p>Request a Loan</p>
          </span>
          <span className="headerIcon">
            <img src={moreImg} alt="image" />
            <p>More</p>
          </span>
          <span className="headerIcon">
            <img src={notificationBellImg} alt="image" />
          </span>
          <span className="headerIcon">
            <img src={settingImg} alt="image" />
          </span>
        </div>
      </div>
    </header>
  );
}
