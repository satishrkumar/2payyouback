// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { userActions } from '../_actions';
// import '../css/homepage.css';

// export default function LeftNav() {
//     const users = useSelector(state => state.users);
//     const user = useSelector(state => state.authentication.user);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(userActions.getAll());
//     }, []);

//     function handleDeleteUser(id) {
//         dispatch(userActions.delete(id));
//     }
    
//     return (
//         <div className="col-md-2 leftNav leftpannel">
//                     <div className="leftContainer">
//                     <h4 className="mb-4">2PayUBack</h4>
//                     <p ><img className="iconClass" src="src/images/dashboard-icon.svg" alt="image" /> <Link activeClassName='active' to="/" exact>Dashboard</Link></p>
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/buy.svg" alt="image" /><Link to="/requestloan" activeClassName='active'>Request a Loan</Link></p> 
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/Money.svg" alt="image" />Agree a Loan</p> 
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/credit-card.svg" alt="image" />Loan Payments</p> 
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/investment.svg" alt="image" />Release Funds</p> 
//                     <p className="inactiveLink" ><img className="iconClass" src="src/images/offers.svg" />Offers</p> 
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/help.svg" />Help</p> 
//                     <p className="inactiveLink"><img className="iconClass" src="src/images/investment.svg"/><Link to="/login" className="inactiveLink">Logout</Link></p>
//                     </div>
//                 </div>
//     );
// }
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../css/homepage.css';

export default function LeftNav() {
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
        <div className="col-md-2 leftNav leftpannel">
                    <div className="leftContainer">
                    <h4 className="mb-4">2PayUBack</h4>
                    <p ><img className="iconClass" src="src/images/dashboard-icon.svg" alt="image" /> <NavLink to="/" activeStyle={{ color:'#0070ba' }} exact>Dashboard</NavLink></p>
                    <p className="bold"><img className="iconClass" src="src/images/buy.svg" alt="image" /><NavLink to="/requestloan" activeStyle={{ color:'#0070ba' }} exact>Request a Loan</NavLink></p> 
                    <p className="bold"><img className="iconClass" src="src/images/Money.svg" alt="image" />Agree a Loan</p> 
                    <p className="bold"><img className="iconClass" src="src/images/credit-card.svg" alt="image" />Loan Payments</p> 
                    <p className="bold"><img className="iconClass" src="src/images/investment.svg" alt="image" />Release Funds</p> 
                    <p className="bold"><img className="iconClass" src="src/images/offers.svg" />Offers</p> 
                    <p className="bold"><img className="iconClass" src="src/images/help.svg" />Help</p> 
                    <p className="logoutLink"><img className="iconClass" src="src/images/investment.svg"/><NavLink to="/login" activeStyle={{ color:'#0070ba' }} exact>Logout</NavLink></p>
                    </div>
                </div>
    );
}