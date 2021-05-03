import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

export default function Summary() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const tableStyle = {
    boderStyle: "solid",
    borderCollapse: "collapse",
  };
  useEffect(() => {
    debugger;
    dispatch(userActions.getById(user.id));
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
    console.log("checkbox checked:", e.target.value);
  }
  return (
    <div className="step3 loanRequestDetails">
      <h2 className="bold">Summary</h2>
      <div className="row">
        <div className="col-md-4">
          <img
            className="leftpannelImg"
            src={loanRepaymentDetailImg}
            alt="image"
          />
        </div>
        <div className="col-md-8 textAlignLeft">
          <Table bordered>
            <tr>
              <th>Your payment 10000 has been made successfully to </th>
              <td>Chris (PayPal)</td>
            </tr>

            <tr>
              <th>Your 2PayUBack Reference Number is </th>
              <td>00001111</td>
            </tr>
            <tr>
              <th>Your Transaction Reference Number is </th>
              <td>1221112</td>
            </tr>
          </Table>
          <div class="row">
            <div class="col-md-12" className="textAlignCenter">
              <Button variant="primary">Okay</Button>{" "}
            </div>
          </div>
          <br />
          <p className="textAlignCenter">
            For any transaction related queries, please contact 2PayUBack and
            quote 2PayUBack Reference Number mentioned above.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
