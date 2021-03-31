import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../css/homepage.css';

export default function Header() {
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
        <header className="headerClass">
                <div className="row">
                <div className="col-md-4"><h2 className="bold">Hello, {user.firstName}!</h2></div>
                <div className="col-md-3">
                <input type="text" placeholder="Search for..." name="search" value={user.search} className={'form-control'} />
                </div>
                <div className="col-md-5 textAlign">
                <span className="headerIcon"><img  src="src/images/approve a loan-icon.svg" alt="image" /></span>
                <span className="headerIcon"><img src="src/images/request a loan-icon.svg" alt="image" /></span>
                <span className="headerIcon"><img src="src/images/more-icon.svg" alt="image" /></span>
                <span className="headerIcon"><img src="src/images/notification-bell.svg" alt="image" /></span>
                <span className="headerIcon"><img src="src/images/settings.svg" alt="image" /></span>
                </div></div>
                    </header>
    );
}