import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";

import StepProgressBar from 'react-step-progress';
import '../css/homepage.css';
import 'react-step-progress/dist/index.css';


function RequestLoanPage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const containerBg = {
        background: "white",
        marginTop: "1%",
        maxWidth: "98%",
        borderRadius: "50px",
        padding: "0"
      };
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

   
    const step1Content = <div className="step1"><h5 className="bold">Loan Details</h5></div>;
    const step2Content = <div className="step2"><h5 className="bold">Tell us more</h5></div>;
    const step3Content = <div className="step3"><h5 className="bold">Loan Repayment Details</h5></div>;
    const step4Content = <div className="step4"><h5 className="bold">PayPal Account</h5></div>;

    function step2Validator() {
    return true;
    }

    function step3Validator() {
    return true;
    }
    const onSubmit = () => {
        alert('submit data');
      };

    return (
        <div className="container" style={containerBg} >
            <div className="row">
                <LeftNav/>
                <div className="col-md-10">
                <Header />
                <div className="row" className="spacingMargin">
                <div className="row"><h5 className="bold">Request a Loan</h5></div>
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
            label: 'Loan Details',
            name: 'Loan Details',
            content: step1Content
          },
          {
            label: 'Tell us more',
            name: 'Tell us more',
            content: step2Content,
            validator: step2Validator
          },
          {
            label: 'Loan Repayment Details',
            name: 'Loan Repayment Details',
            content: step3Content,
            validator: step3Validator
          },
          {
            label: 'PayPal Account',
            name: 'PayPal Account',
            content: step4Content
          }
        ]}
      />
    </div></div>
                </div>
                </div>
            </div>
       
    );
}

export { RequestLoanPage };