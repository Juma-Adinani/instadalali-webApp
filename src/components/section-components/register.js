import React, { useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { requests, url } from "helpers";

function Register() {
  const [data, setInput] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(() => ({ ...data, [name]: value }));
  };

  async function onSubmit(event) {
    event.preventDefault();
    // alert("Name: " + data.username + " " + "Password: " + data.password);
    try {
      const res = await requests.post(url.register, data);
      // console.log(res);
      alert("Successfully Registered");
      window.location("/#/login");
    } catch (error) {
      alert(JSON.stringify(error.data));
    }
  }

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center mt-30">
              <h1 className="section-title">
                Create <br />
                Your Account
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <form
                method="POST"
                className="ltn__form-box contact-form-box"
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username*"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name*"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name*"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  onChange={handleChange}
                  required
                />
                {/* <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password*"
                ssword}
                  onChange={handleChange}
                  required
                /> */}
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue />
                  &nbsp; I consent to Herboil processing my personal data in
                  order to send personalized marketing material in accordance
                  with the consent form and the privacy policy.
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" defaultValue /> &nbsp; By clicking
                  "create account", I consent to the privacy policy.
                </label>
                <div className="btn-wrapper">
                  <button
                    className="theme-btn-1 btn reverse-color btn-block"
                    type="submit"
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </form>
              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <Link to="./terms">TERMS OF CONDITIONS </Link>&nbsp; &nbsp; |
                  &nbsp; &nbsp;
                  <Link to="./privacy">PRIVACY POLICY </Link>
                </p>
                <div className="go-to-btn mt-50">
                  <Link to="./login">ALREADY HAVE AN ACCOUNT ?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
