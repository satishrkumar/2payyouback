import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../_actions";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import LoanRequestDetails from "./LoanRequestDetails";
import "../css/homepage.css";
import "react-step-progress/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";


function ApproveLoan() {
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


    return (
        <div className="container requestBG" style={containerBg}>
            <div className="row">
                <LeftNav/>
                <div className="col-md-9 bg-image">
                    <Header/>
                    <div className="row spacingMargin">
                        <div className="row">
                            <h5 className="bold">View Loan Requests</h5>
                        </div>
                        <div className="row">
                            <LoanRequestDetails/>
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

export {ApproveLoan};
