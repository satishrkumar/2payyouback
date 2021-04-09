import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanDetailImg from "../images/loan_details.png";

export default function TellusMore() {
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
    <div className="step2 loanDetails">
      <h2 className="bold">Money Repay Details</h2>
      <div className="row">
        <div className="col-md-5">
          <img className="leftpannelImg" src={loanDetailImg} alt="image" />
        </div>
        <div className="col-md-5 marginLeft">
          <p className="textAlignLeft bold">Daily</p>
          <div className="rowTellUsMore">
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
                name="dailyAmount"
                value={user.dailyAmount}
                onChange={handleChange}
                className={"form-control"}
              />
            </div>
          </div>
          <p className="textAlignLeft bold">Monthly</p>
          <div className="rowTellUsMore">
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
                name="monthlyAmount"
                value={user.monthlyAmount}
                onChange={handleChange}
                className={"form-control"}
              />
            </div>
          </div>
          <p className="textAlignLeft bold">Quarterly</p>
          <div className="rowTellUsMore">
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
                name="quarterlyAmount"
                value={user.quarterlyAmount}
                onChange={handleChange}
                className={"form-control"}
              />
            </div>
          </div>

          <p className="textAlignLeft bold">Annualy</p>
          <div className="rowTellUsMore">
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
                name="annualyAmount"
                value={user.annualyAmount}
                onChange={handleChange}
                className={"form-control"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
