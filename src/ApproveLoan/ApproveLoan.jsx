import React,  from "react";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import LoanRequestDetails from "./LoanRequestDetails";
import "../css/homepage.css";
import "react-step-progress/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";


function ApproveLoan() {

    const containerBg = {
        background: "white",
        marginTop: "1%",
        maxWidth: "98%",
        borderRadius: "50px",
        padding: "0",
        marginBottom: "20px",
    };

    return (
        <div className="container requestBG" style={containerBg}>
            <div className="row">
                <LeftNav/>
                <div className="col-md-9 bg-image">
                    <Header/>
                    <div className="row spacingMargin">
                        <div className="row w-100">
                            <h5 className="bold">View Loan Requests</h5>
                            <LoanRequestDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ApproveLoan};
