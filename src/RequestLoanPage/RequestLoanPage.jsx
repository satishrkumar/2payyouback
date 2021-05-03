import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import LoanDetails from "./LoanDetails";
import RepaymentDetails from "./RepaymentDetails";
import PaypalAccount from "./PaypalAccount";
import StepProgressBar from "react-step-progress";
import "../css/homepage.css";
import "react-step-progress/dist/index.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import payPalImg from "../images/paypal_icon.svg";

function RequestLoanPage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const containerBg = {
    background: "white",
    marginTop: "1%",
    maxWidth: "98%",
    borderRadius: "50px",
    padding: "0",
  };
  useEffect(() => {
    debugger;
    dispatch(userActions.getById(user.id));
  }, []);
  const step1Content = <LoanDetails />;
  const step3Content = <RepaymentDetails />;
  const step4Content = <PaypalAccount />;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function step3Validator() {
    // alert("one");
    handleShow();
    return true;
  }
  const onSubmit = () => {
    alert("submit data");
  };

  return (
    <div className="container requestBG" style={containerBg}>
      <div className="row">
        <LeftNav />
        <div className="col-md-10 bg-image">
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
                  // {
                  //   label: 'Tell us more',
                  //   name: 'Tell us more',
                  //   content: step2Content,
                  //   validator: step2Validator
                  // },
                  {
                    label: "Loan Repayment Details",
                    name: "Loan Repayment Details",
                    content: step3Content,
                    validator: step3Validator,
                  },
                  {
                    label: "PayPal Account",
                    name: "PayPal Account",
                    content: step4Content,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="paymentModelWindow">
        <Modal.Header>
          <Modal.Title>
            <img src={payPalImg} alt="image" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="textAlignCenter">
          Do you have a PayPal account
        </Modal.Body>
        <Modal.Footer className="textAlignCenter">
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { RequestLoanPage };
