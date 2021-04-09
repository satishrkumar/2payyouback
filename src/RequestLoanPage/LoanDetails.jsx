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
  const currency = ["£", "$", "Others..."];
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
    <div className="step1 loanDetails">
      <h2 className="bold">Loan Details</h2>
      <div className="row">
        <div className="col-md-5">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-5 marginLeft">
          <p className="textAlignLeft bold">
            How much ammountyou want to borrow?
          </p>
          <div className="form-group ldInputLeft">
            <select
              name="currency"
              className={"form-control"}
              value={user.currency}
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
              name="amount1"
              value={user.amount1}
              onChange={handleChange}
              className={"form-control"}
            />
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              Tell the reason for borrowing money?
            </p>
            <textarea
              value={user.borrowingReason}
              className={"form-control registerPageInput"}
              name="borrowingReason"
              rows="3"
              cols="30"
            ></textarea>
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              Estimated dateof loan repayment?
            </p>
            <input
              type="date"
              name="estimatedDate"
              value={user.estimatedDate}
              onChange={handleChange}
              className={"form-control ldDate"}
            />
          </div>
          <div className="form-group dw">
            <p className="textAlignLeft bold">
              What rate of intrestyou want to give?
            </p>
            <input
              type="text"
              name="rateofIntrest"
              value={user.rateofIntrest}
              onChange={handleChange}
              className={"form-control ldDate"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
