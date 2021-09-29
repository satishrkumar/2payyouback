import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import "../css/homepage.css";
import mobileImg from "../images/img-1.png";
import googlePlaystoreImg from "../images/googleplaystore.svg";
import addProfileSectionImg from "../images/add profile section.png";
import weekDaysImg from "../images/week days.svg";
import businessCardImg from "../images/business card.svg";
import accountVerificationImg from "../images/account verification.svg";
import recentActivityImg from "../images/recent activity.svg";
import appStoreImg from "../images/appstore.svg";

export default function Summary() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userActions.getById(user.id));
  // }, []);
  //
  // function handleDeleteUser(id) {
  //   dispatch(userActions.delete(id));
  // }

  return (
    <div className="col-md-12 summaryComp">
      <div className="row spacingBottom">
        <div className="col-md-4 w-100">
          <h6 className="font-weight-bold">Try our Mobile App</h6>
          <div className="textAlignCenter">
            <img className="mobileAppImg" src={mobileImg} alt="image" />
            <br />
            <img className="AppleAppImg" src={appStoreImg} alt="image" />
            <img
              className="googleAppImg"
              src={googlePlaystoreImg}
              alt="image"
            />
          </div>
        </div>
        <div className="col-md-5 w-100">
          <h6 className="bold">Add your Profile</h6>
          <img className="imageClass" src={addProfileSectionImg} alt="image" />
        </div>
        <div className="col-md-3 w-100">
          <h6 className="font-weight-bold"></h6>
          <img className="imageClass" src={weekDaysImg} alt="image" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h6 className="bold">Active Wallets</h6>
          <img className="imageClass" src={businessCardImg} alt="image" />
        </div>
        <div className="col-md-4">
          <h6 className="bold">Account Verification</h6>
          <img
            className="imageClass"
            src={accountVerificationImg}
            alt="image"
          />
        </div>
        <div className="col-md-4">
          <h6 className="bold">Recent Activity</h6>
          <img className="imageClass" src={recentActivityImg} alt="image" />
        </div>
      </div>
    </div>
  );
}
