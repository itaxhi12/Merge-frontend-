/** @format */

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";
import { Redirect } from "react-router-dom";
import axios from "axios";
const ChangePasswords = () => {
  const [input, setInput] = useState({});
  const [openSnackbar] = useSnackbar();
  const user = useSelector((state) => state.auth.user.user.username);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const updatePass = () => {
    if (input.old_pwd && input.new_pwd && input.confirm_password) {
      if (input.new_pwd === input.confirm_password) {
        axios
          .post("http://127.0.0.1:8000/chpwd", {
            username: user,
            old_pwd: input.old_pwd,
            new_pwd: input.new_pwd,
          })
          .then((res) => {
            openSnackbar(res.data.message);
          });
      } else {
        openSnackbar("Passwords donot match");
      }
    } else {
      openSnackbar("Please fill all the credentials");
    }
  };
  if (user) {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />

        <div className="base-container">
          <div className="header">Change Password</div>
          <br />
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Old Password</label>
                <input
                  type="password"
                  name="old_pwd"
                  placeholder="old password"
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  name="new_pwd"
                  placeholder="new password"
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="confirm password"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" onClick={updatePass} className="btn">
              Update Password
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};
export default ChangePasswords;
