import React from "react";
import "./HeaderOne.css";

function HeaderOne() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container">
          <h1 className="header-title">Care Quick</h1>
          <div className="header-content1">
          <p className="header-text">Get answers to your medical inquiries via <br /> your phone anywhere and anytime</p>
          <div className="header-buttons">
            <button className="btn primary">Talk to a Doctor</button>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderOne;
