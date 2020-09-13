import React from "react";
import "./LandingPage.css";
import avatar from "./avatar.jpg";
import Header from "./Header";
import Sidebar from "./Sidebar";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__container">
        <img className="landingPage__image" src={avatar} atl="avatar" />
        <Header />
        <Sidebar />
        <h1 className="title">INDIGENE</h1>
      </div>
    </div>
  );
}

export default LandingPage;
