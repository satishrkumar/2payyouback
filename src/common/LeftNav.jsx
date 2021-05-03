import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import dashboardImg from "../images/dashboard-icon.svg";
import buyImg from "../images/buy.svg";
import moneyImg from "../images/Money.svg";
import creditCardImg from "../images/credit-card.svg";
import investmentImg from "../images/investment.svg";
import offerImg from "../images/offers.svg";
import helpImg from "../images/help.svg";

export default function LeftNav() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="col-md-2 leftNav leftpannel">
      <div className="leftContainer">
        <h4 className="mb-4">2PayUBack</h4>
        <p>
          <img className="iconClass" src={dashboardImg} alt="image" />{" "}
          <NavLink to="/" activeStyle={{ color: "#0070ba" }} exact>
            Dashboard
          </NavLink>
        </p>
        <p className="bold">
          <img className="iconClass" src={buyImg} alt="image" />
          <NavLink to="/requestloan" activeStyle={{ color: "#0070ba" }} exact>
            Request a Loan
          </NavLink>
        </p>
        <p className="bold">
          <img className="iconClass" src={moneyImg} alt="image" />
          <NavLink to="/approveloan" activeStyle={{ color: "#0070ba" }} exact>
          Approve a Loan
          </NavLink>
        </p>
        <p className="bold">
          <img className="iconClass" src={creditCardImg} alt="image" />
          Loan Payments
        </p>
        <p className="bold">
          <img className="iconClass" src={investmentImg} alt="image" />
          Release Funds
        </p>
        <p className="bold">
          <img className="iconClass" src={offerImg} />
          Offers
        </p>
        <p className="bold">
          <img className="iconClass" src={helpImg} />
          Help
        </p>
        <p className="logoutLink">
          <img className="iconClass" src={investmentImg} />
          <NavLink to="/login" activeStyle={{ color: "#0070ba" }} exact>
            Logout
          </NavLink>
        </p>
      </div>
    </div>
  );
}
