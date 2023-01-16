import React from "react";
import { useState } from "react";
// import {Link} from 'react-router-dom'
import Lg from "../Logo/logo2.png";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Registration = () => {
  const [hoten, hotenChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [phone, phoneChange] = useState("");
  // const [gioitinh,gioitinhChange] = useState("");
  const [ngaysinh, ngaysinhChange] = useState("");
  const [Confirm, confirmChange] = useState("");
  const [validatePassword, confirmPasswordChange] = useState(false);
  const [showPassword, showPasswordChange] = useState(false);
  const [showPassword1, showPassword1Change] = useState(false);

  const navigate = useNavigate();

  const validate = (e) => {
    confirmChange(e.target.value);
    confirmPasswordChange(e.target.value === password ? false : true);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:5000/customer/register",
        {
          hoten,
          email,
          dienthoai: phone,
          password,
          // gioitinh,
          ngaysinh,
        },
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Registered account successfully");

          navigate("/login");
        }
      })
      .catch((error) => {
        alert(`${error.response.data.message}`);
      });
  };
  return (
    <div className="container">
      <div className="center_regis">
        <div className="Regis_container">
          <div className="title">
            <img className="Lg" src={Lg} alt="" />
            <b className="Text">Registration</b>
          </div>
          <br />
          <br />
          <div className="content">
            <form action="#" onSubmit={handlesubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={hoten}
                    onChange={(e) => hotenChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Date of birth</span>
                  <input
                    type="date"
                    placeholder="Enter your Gender"
                    required
                    value={ngaysinh}
                    onChange={(e) => ngaysinhChange(e.target.value)}
                  />
                </div>
                {/* <div class="input-box">
          <span className="details">Gender</span>
              <select name="details"   >
                  <option selected disabled>Choose a Gender</option>
                  <option value={gioitinh} onChange={(e) => gioitinhChange(e.target.value)}>0</option>
                  <option value={gioitinh} onChange={(e) => gioitinhChange(e.target.value)}>1</option>
              </select> 
          </div>  */}
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => emailChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  {/* < input type="tel" name="phone"/> */}
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0]{1}[0-9]{4}[0-9]{5}"
                    placeholder="Enter your phone number"
                    required
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <div className="p-relative">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => passwordChange(e.target.value)}
                    />

                    <div className="Eye">
                      {!showPassword1 ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ cursor: "pointer" }}
                          onClick={() => showPassword1Change(true)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          style={{ cursor: "pointer" }}
                          onClick={() => showPassword1Change(false)}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <div className="p-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      required
                      value={Confirm}
                      onChange={validate}
                    />

                    <div className="Eye">
                      {!showPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ cursor: "pointer" }}
                          onClick={() => showPasswordChange(true)}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          style={{ cursor: "pointer" }}
                          onClick={() => showPasswordChange(false)}
                        />
                      )}
                    </div>
                  </div>

                  {/* <FontAwesomeIcon icon={faEye} />
            <FontAwesomeIcon icon={faEyeSlash} /> */}
                  {validatePassword && <p>Password does not match</p>}
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Register" />
                {/* <center><a href="../Login">Login </a></center> */}
                <center>
                  <Link to="/Login" className="L">
                    Login
                  </Link>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
