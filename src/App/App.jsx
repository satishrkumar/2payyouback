import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../HomePage';
import {RequestLoanPage} from '../RequestLoanPage';
import {ApproveLoan} from '../ApproveLoan';
import {Renegotiate} from '../ApproveLoan/Renegotiate';
import {LoginPage} from '../LoginPage';
import {RegisterPage} from '../RegisterPage';
import {ToastContainer} from 'react-toastify';


function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    const mystyle = {
        background: "none",
        padding: "0",
        margin: "0 auto"

    };


    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron h-100" style={mystyle}>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer/>
            {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/requestloan" component={RequestLoanPage}/>
                    <Route path="/approveloan" component={ApproveLoan}/>
                    <Route path="/renegotiate" component={Renegotiate}/>
                    <Route path="/HomePage" component={HomePage}/>

                    <Redirect from="*" to="/"/>
                </Switch>
            </Router>


        </div>
    );
}

export {App};
