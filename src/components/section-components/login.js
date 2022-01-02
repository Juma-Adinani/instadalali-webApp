import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requests, setAuthorization, url, utils } from "helpers";
import parse from "html-react-parser";

export default function Login(props) {
  const [data, setData] = useState({});
  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await requests.post(url.login, data);
      setAuthorization(res.key);
      const u = await requests.get(url.user);
      utils.setUser({ ...u, token: res.key });
      utils.navigate(url.routes.shop);
    } catch (e) {
      alert(JSON.stringify(e.data));
    }
  }

  return (
    <div className="ltn__login-area mt-30 mb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">
                Sign In <br />
                To Your Account
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="account-login-inner">
              <form
                method="POST"
                onSubmit={onSubmit}
                className="ltn__form-box contact-form-box"
              >
                <input
                  onChange={handleInput}
                  type="text"
                  name="username"
                  placeholder="Username*"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  onChange={handleInput}
                />
                <div className="btn-wrapper mt-0">
                  <button className="theme-btn-1 btn btn-block" type="submit">
                    SIGN IN
                  </button>
                </div>
                <div className="go-to-btn mt-20">
                  <a href="./#/login">
                    <small>FORGOTTEN YOUR PASSWORD?</small>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="account-create text-center pt-50">
              <h4>DON'T HAVE AN ACCOUNT?</h4>
              <div className="btn-wrapper go-top">
                <Link to="/register" className="theme-btn-1 btn black-btn">
                  CREATE ACCOUNT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
