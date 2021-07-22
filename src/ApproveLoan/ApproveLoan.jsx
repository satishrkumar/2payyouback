import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import LoanRequestDetails from "./LoanRequestDetails";
import ViewDetails from "./ViewDetails";
import Summary from "./Summary";
import StepProgressBar from "react-step-progress";
import "../css/homepage.css";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-step-progress/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import payPalImg from "../images/paypal_icon.svg";

function ApproveLoan() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
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
  const step1Content = <LoanRequestDetails />;
  const step3Content = <ViewDetails />;
  const step4Content = <Summary />;

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
        <div className="col-md-9 bg-image">
          <Header />
          <div className="row" className="spacingMargin">
            <div className="row">
              <h5 className="bold">Approve a Loan</h5>
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
                    label: "Loan Request Details",
                    name: "Loan Request Details",
                    content: step1Content,
                  },
                  // {
                  //   label: 'Tell us more',
                  //   name: 'Tell us more',
                  //   content: step2Content,
                  //   validator: step2Validator
                  // },
                  {
                    label: "View Details",
                    name: "View Details",
                    content: step3Content,
                    validator: step3Validator,
                  },
                  {
                    label: "Summary",
                    name: "Summary",
                    content: step4Content,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose} className="paymentModelWindow">
        <Modal.Header>
          <Modal.Title>
            <img src={payPalImg} alt="image" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="textAlignCenter">
          Do you have a PayPal account?
        </Modal.Body>
        <Modal.Footer className="textAlignCenter">
          <Button variant="primary" onClick={handleClose}>
            Link PayPal
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Pay Manually
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export { ApproveLoan };
