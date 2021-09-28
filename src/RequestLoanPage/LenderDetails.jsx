import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestLoanActions} from "../_actions";
import "../css/homepage.css";
import loanRepaymentDetailImg from "../images/loan_repayment_details.png";


import {ReactMultiEmail, isEmail} from 'react-multi-email';
import 'react-multi-email/style.css';

export default function RepaymentDetails() {
    const loanFromState = useSelector((state) => state.loanrequest);
    const dispatch = useDispatch();
    const lenders =  loanFromState.lenders != null ? loanFromState.lenders : []
    const [emails] = useState([...lenders])
    return (
        <div className="step3 lenderDetails">
            <h2 className="bold">Lender Details</h2>
            <div className="row">
                <div className="col-md-4">
                    <img
                        className="leftpannelImg"
                        src={loanRepaymentDetailImg}
                        alt="image"
                    />
                </div>
                <ReactMultiEmail
                    placeholder="Lender Mail Ids"
                    emails={emails}
                    onChange={(_emails) => {
                        //setEmails(_emails)
                        dispatch(requestLoanActions.addLenders(_emails))
                    }}
                    validateEmail={email => {
                        return isEmail(email); // return boolean
                    }}
                    getLabel={(
                        email,
                        index,
                        removeEmail,
                    ) => {
                        return (
                            <div key={index}>
                                {email}
                                <span onClick={() => removeEmail(index)}>
                  ×
                </span>
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}
