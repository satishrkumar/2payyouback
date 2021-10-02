import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import { requestLoanActions } from "../_actions";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import LoanDetails from "./LoanDetails";
import RepaymentDetails from "./RepaymentDetails";
import LenderDetails from "./LenderDetails";
import PaypalAccount from "./PaypalAccount";
import StepProgressBar from "react-step-progress";
import "../css/homepage.css";
import "react-step-progress/dist/index.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import payPalImg from "../images/paypal_icon.svg";
import {loanrequest} from "../_reducers/loanrequest.reducer";

function RequestLoanPage() {
  const user = useSelector((state) => state.authentication.user);
  const loan = useSelector((state) => state.loanrequest);

  const dispatch = useDispatch();
  const containerBg = {
    background: "white",
    marginTop: "1%",
    maxWidth: "98%",
    borderRadius: "50px",
    padding: "0",
    marginBottom: "20px",
  };
  useEffect(() => {
    dispatch(userActions.getById(user.id));
  }, []);
  const step1Content = <LoanDetails />;
  const step2Content = <RepaymentDetails />;
  const step3Content = <LenderDetails />;
  const step4Content = <PaypalAccount />;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var modelContent = "";
  function step2Validator() {
    // alert("one");
    modelContent = "Do you have a PayPal account?";
    handleShow();
    return true;
  }
  function step3Validator() {
    // alert("one");
    modelContent = "Do you have a Lender Details?";
    handleShow();
    return true;
  }
  const onSubmit = () => {
    //alert("submit data");
    dispatch(requestLoanActions.submitLoanRequest(user,loan)
    )
  };

  function One() {
    // alert("one");
    modelContent = "abc";
    handleShow();
    return true;
  }

  return (
    <div className="container requestBG" style={containerBg}>

      <div className="row">
        <LeftNav />
        <div className="col-md-9 bg-image">
          <Header />
          <div className="row" className="spacingMargin">
            <div className="row">
              <h5 className="bold">Request a Loan</h5>
            </div>
            <div className="row">
              <StepProgressBar
                startingStep={0}
                wrapperClass="progress-wrapper-custom"
                onSubmit={onSubmit}
                submitBtnName="Submit"
                previousBtnName="Previous"
                nextBtnName="Next"
                steps={[
                  {
                    label: "Loan Details",
                    name: "Loan Details",
                    content: step1Content,
                  },
                  {
                    label: "Loan Repayment Details",
                    name: "Loan Repayment Details",
                    content: step2Content,
                    validator: step2Validator,
                  },
                  {
                    label: "Lender Details",
                    name: "Lender Details",
                    content: step3Content,
                    validator: step3Validator,
                  },
                  {
                    label: "Summary Details",
                    name: "Summary Details",
                    content: step4Content,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/*  <Modal show={show} onHide={handleClose} className="paymentModelWindow">
        <Modal.Header>
          <Modal.Title>
            <img src={payPalImg} alt="image" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="textAlignCenter">{modelContent}</Modal.Body>
        <Modal.Footer className="textAlignCenter">
          <Button variant="primary" onClick={handleClose}>
            Link PayPal
          </Button>
          <Button variant="secondary" onClick={One}>
            Pay Manually
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export { RequestLoanPage };
