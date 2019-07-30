import React from "react";
import LoginBtn from "./Navbar";

function Bypass () {
  return (
    <div className="row">
      <div className="col-5" />
      <LoginBtn/>
    {/* <a className="col-2 loginButton" href="/home/">Login</a> */}
    <div className="col-5" />
    </div>
  );
}

export default Bypass;