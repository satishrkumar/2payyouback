import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../css/homepage.css';

export default function Summary() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
    
    return (
        <div className="col-md-12 summaryComp">
        <div className="row spacingBottom">
            <div className="col-md-4 w-100"><h6 className="font-weight-bold">Try our Mobile App</h6>
            <div className="textAlignCenter"><img className="mobileAppImg" src="src/images/img-1.png" alt="image" /><br />
            <img className="AppleAppImg" src="src/images/appstore.svg" alt="image" /><img className="googleAppImg" src="src/images/googleplaystore.svg" alt="image" /></div>
            </div>
            <div className="col-md-5 w-100"><h6 className="bold">Add your Profile</h6><img className="imageClass" src="src/images/add profile section.png" alt="image" /></div>
            <div className="col-md-3 w-100"><h6 className="font-weight-bold"></h6><img className="imageClass" src="src/images/week days.svg" alt="image" /></div>  
        </div>
        <div className="row" >
            <div className="col-md-4"><h6 className="bold">Active Wallets</h6><img className="imageClass" src="src/images/business card.svg" alt="image" /></div>
            <div className="col-md-4"><h6 className="bold">Account Verification</h6><img className="imageClass" src="src/images/account verification.svg" alt="image" /></div>
            <div className="col-md-4"><h6 className="bold">Recent Activity</h6><img className="imageClass" src="src/images/recent activity.svg" alt="image" /></div>  
        </div>
        </div>
    );
}