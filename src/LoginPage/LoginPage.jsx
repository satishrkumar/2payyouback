import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import '../css/homepage.css'


function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation(); 
    const containerBg = {
        background: "white",
        marginTop: "6%",
        maxWidth: "90%",
        borderRadius: "50px",
        padding: "5%"
      };

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <div className="container loginPage" style={containerBg} >
        <div className="row">
            <div className="col-md-7">
                <img className="leftpannelImg" src="src/images/loginBg.png" alt="image" />
              
            </div>
            <div className="col-md-5 textAlignCenter">
            <h1 className="mb-4 bold">2PayUBack</h1>
            <h2 className="mb-4 bold">Welcome Back</h2>
            <div className="textAlignCenter">
            <img className="iconClass" src="src/images/paypal-icon.svg" alt="image" />
            <img className="iconClass" src="src/images/google-icon.svg" alt="image" />
            <img className="iconClass" src="src/images/fb-icon.svg" alt="image" />
            <img className="iconClass" src="src/images/apple-icon.svg" alt="image" />
            </div>
            <h6 className="mt-5 mb-4">---- OR LOGIN WITH / MOBILE ----</h6>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Email / Mobile" name="username" value={username} onChange={handleChange} className={'form-control loginInput' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} className={'form-control loginInput' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary loginInput">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button><br /><br />
                    Don't have an account yet? <Link to="/register" className="btn btn-link">Signup</Link>
                </div>
            </form>
            </div>
            </div>
        </div>
    );
}

export { LoginPage };