import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import LeftNav from "../common/LeftNav";
import Header from "../common/Header";
import Summary from "./Summary";
import "../css/homepage.css";
function HomePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const containerBg = {
    background: "white",
    marginTop: "1%",
    maxWidth: "98%",
    borderRadius: "50px",
    padding: "0",
  };

  return (
    <div className="container" style={containerBg}>
      <div className="row">
        <LeftNav />
                <div className="col-md-9">

          <Header />

          <div className="row" className="spacingMargin">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePage };
