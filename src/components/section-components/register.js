import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    try {
      await requests.post(url.register, data);
      alert("Successfully Registered");
      window.location("/#/login");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  return (
    <div className="ltn__login-area pb-110">
      <div className="container" style={{ width: `80%` }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center mt-30">
              <h1 className="section-title">Create Account</h1>
            </div>
          </div>
        </div>
        <form
          method="POST"
          className="ltn__form-box contact-form-box"
          onSubmit={onSubmit}
        >
          <div className="form-group row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="username"
                placeholder="Username*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="firstname"
                placeholder="First Name*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12 col-md-6">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-12">
              <input
                type="password"
                name="password"
                placeholder="Password*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label className="checkbox-inline">
            <input type="checkbox" defaultValue />
            &nbsp; I consent to Instadalali processing my personal data in order
            to send personalized marketing material in accordance with the
            consent form and the privacy policy.
          </label>
          <label className="checkbox-inline">
            <input type="checkbox" defaultValue /> &nbsp; By clicking "create
            account", I consent to the&nbsp;
            <Link to={url.routes.tnc} style={{ color: `dodgerblue` }}>
              Terms of conditions
            </Link>
            &nbsp;&amp; &nbsp;
            <Link to={url.routes.privacy} style={{ color: `dodgerblue` }}>
              Privacy policy
            </Link>
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
          <div className="go-to-btn">
            ALREADY HAVE AN ACCOUNT ?&nbsp;&nbsp;
            <Link to={url.routes.login} style={{ color: `dodgerblue` }}>
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
