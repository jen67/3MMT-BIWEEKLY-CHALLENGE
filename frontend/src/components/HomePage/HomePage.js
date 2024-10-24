import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import quickResolve from "../../assets/images/QuickResolve-logo.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="quick-resolve">
        <img src={quickResolve} alt="quick resolve" />
      </div>
      
      <div className="flex-items">
        <div className="logo">
          <img src={logo} alt="3MMT Logo" />
        </div>
        <div className="complaints-texts">
          <h1>3MTT Complaints Portal and A Support Help desk.</h1>
          <Link to="/SignUpPage" className="btn">
            File a Complaint
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
