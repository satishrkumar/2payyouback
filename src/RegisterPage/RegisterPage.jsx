import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import '../css/homepage.css';

function RegisterPage() {
    const containerBg = {
        background: "white",
        maxWidth: "98%",
        marginTop: "1%",
        borderRadius: "50px",
        padding: "2%"
      };
    
    const countries = ["Argentina", "Bolivia", "Brazil", "Chile", "Others..."];
    const nationality = ["abcd", "Others..."];
    
      
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmpassword: '',
        birthday: '',
        nationality: '',
        phone: '',
        flatnumber: '',
        address1: '',
        address2: '',
        town: '',
        country: '',
        postalcode: ''
    });
    
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
        console.log('checkbox checked:', (e.target.value));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.username && user.password && user.confirmpassword && user.birthday && user.nationality && user.phone && user.flatnumber && user.address1 && user.address2 && user.town && user.country && user.postalcode) {
            dispatch(userActions.register(user));
        }
    }
    return (
        <div className="container registerPage" style={containerBg} >
        <div className="row">
        <div className="col-md-7">
                <img className="leftpannelImg" src="src/images/loginBg.png" alt="image" />
            </div>
            <div className="col-md-5">
            <h1 className="mb-4 textAlignCenter">2PayUBack</h1>
            <h2 className="mb-4 textAlignCenter bold">Add your profile details</h2>
            <h6 className="mt-3 mb-4 contentBold textAlignCenter bold">Use the one that's on your bills</h6>
            
            <form name="form" onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email ID" name="username" value={user.username} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">email is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} className={'form-control registerPageInput' + (submitted && user.confirmpassword != user.password ? ' is-invalid' : '')} />
                    {submitted && user.confirmpassword != user.password &&
                        <div className="invalid-feedback">Confirm Password don't match.</div>
                    }
                </div>
                <div className="form-group">
                    <input type="date" placeholder="Birthday" name="birthday" value={user.birthday} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.birthday ? ' is-invalid' : '')} />
                    {submitted && !user.birthday &&
                        <div className="invalid-feedback">Birthday is required.</div>
                    }
                </div>
                <div className="form-group">
                  <select name="nationality" className={'form-control registerPageInput'} value={user.nationality} onChange={handleChange}>
                    <option value="">Nationality</option>
                    {nationality.map((name) => (
                    <option key={name} value={name}>
                    {name}
                   </option>
                   ))}
                 </select>
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Phone Number" pattern="[0-9]{10}" name="phone" value={user.phone} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.phone ? ' is-invalid' : '')} />
                    {submitted && !user.phone &&
                        <div className="invalid-feedback">Phone Number is required</div>
                    }
                </div>
                <h6 className="w-100 contentBold textAlignCenter">Address</h6>
                <div className="form-group">
                    <input type="text" placeholder="Flat Number" name="flatnumber" value={user.flatnumber} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.flatnumber ? ' is-invalid' : '')} />
                    {submitted && !user.flatnumber &&
                        <div className="invalid-feedback">Flat Number is required</div>
                    }
                </div>
                <div className="form-group">
                <input type="text" placeholder="Address line1" name="address1" value={user.address1} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.address1 ? ' is-invalid' : '')} />
                {submitted && !user.address1 &&
                <div className="invalid-feedback">address line1 is required</div>
                }
              </div>
              <div className="form-group">
                <input type="text" placeholder="Address line2" name="address2" value={user.address2} onChange={handleChange} className={'form-control registerPageInput'} /> 
              </div>
              <div className="form-group">
              <input type="text" placeholder="Town / City" name="town" value={user.town} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.town ? ' is-invalid' : '')} />
              {submitted && !user.town &&
              <div className="invalid-feedback">Town / City is required</div>
              }
              </div>
              <div className="form-group">  
              <select name="country" className={'form-control registerPageInput'} value={user.country} onChange={handleChange}>
              <option value="">Country</option>
              {countries.map((name) => (
              <option key={name} value={name}>
              {name}
             </option>
             ))}
            </select>
            </div>
            <div className="form-group">
            <input type="text" placeholder="Postalcode" name="postalcode" value={user.postalcode} onChange={handleChange} className={'form-control registerPageInput' + (submitted && !user.postalcode ? ' is-invalid' : '')} />
            {submitted && !user.postalcode &&
            <div className="invalid-feedback">Postalcode is required</div>
            }
            </div>
            <div className="row w-100">
                <div className="col-md-6 marginTop">
                    <h6 className="contentBold textAlignLeft">Marketing Preferences</h6>
                    <div className="form-group">
                   <span className="registerSpacebetween fontSize"> <input type="checkbox" name="emailid" value={user.emailid} onClick={handleChange} /> Email Id</span>
                   <span className="registerSpacebetween fontSize"> <input type="checkbox" name="phoneNumber" value={user.phoneNumber} onClick={handleChange} /> Phone Number</span>
                    </div>
                </div>
                <div className="col-md-6 marginTop">
                    <h6 className="contentBold textAlignLeft">Contact Preferences</h6>
                    <div className="form-group"> 
                   <span className="registerSpacebetween fontSize"> <input type="checkbox" name="constactEmailid" value={user.constactEmailid} onClick={handleChange} /> Email Id</span>
                   <span className="registerSpacebetween fontSize"> <input type="checkbox" name="contactPhoneNumber" value={user.contactPhoneNumber} onClick={handleChange} /> Phone Number</span>
                    </div>
                </div>
            </div>
            <div className="bottomBox"> 
           <div className="leftB"> <input type="checkbox" checked="checked" name="" value="" onClick={handleChange} /></div> <div className="rightB">Activate one touch</div>
           </div>
           <div className="bottomBox">
           <div className="leftB"><input type="checkbox" checked="checked" name="" value="" onClick={handleChange} /> </div><div className="rightB">I agree to receive marketing communications from 2PayUBack.<br />
            I can change my notification preferences at any time.</div></div>
            <div className="bottomBox">
            <div className="leftB"><input type="checkbox" checked="checked" name="" value="" onClick={handleChange} /></div> <div className="rightB">By clicking the button below, I agree to be bound by 2PayUBack's <br /> <Link class="activeLink"> <u>User Agreement</u></Link> and <Link class="activeLink"> <u>Privacy Policy</u></Link> </div>
            </div>
                <div className="form-group w-100 textAlignCenter">
                    <button className="btn btn-primary registerPageButton marginBottom">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Agree and Create Account
                    </button>
                   {/* Already a member? <Link to="/login" className="btn btn-link">Login</Link> */}
                </div>
            </form>
        </div></div></div>
    );
}

export { RegisterPage };