import React from "react";
import { useState } from "react";
import "./Forgot.css";
import LogoF from "../Logo/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Forgot = () => {
  const [email, emailChange] = useState();

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:5000/customer/forgotPassword",
        {
          email,
        },
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Successfully.");
          navigate("/Login");
        }
      })
      .catch(() => alert("This account does not exist"));
  };
  return (
    <div className="center">
      <input type="checkbox" id="show" />
      <div className="NotF_container">
        <div className="text">
          <img className="LogoF" src={LogoF} alt="" />
          ForgotPassword
        </div>
        <form action="#" onSubmit={handlesubmit}>
          <div className="data">
            <label>Email or Phone</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => emailChange(e.target.value)}
            />
          </div>
          <div className="btn">
            <div className="inner"></div>
            <button type="submit">submit</button>
          </div>
          <div className="signup-link">
            <Link to="/Login">Login Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
