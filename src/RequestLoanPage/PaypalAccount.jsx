import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../css/homepage.css';

export default function LoanDetails() {
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
                 <div className="step4">
                 <h5 className="bold">PayPal Account</h5>
                 <div className="row">
                 <div className="col-md-5"><img className="leftpannelImg" src="src/images/loan_details.png" alt="image" /></div>
                 <div className="col-md-5">ffffffffffff</div>
                 </div>
             </div>
    );
}