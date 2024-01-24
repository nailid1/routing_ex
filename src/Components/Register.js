import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("clicked Register");
    Axios.post(
      "https://659d149c633f9aee79088e38.mockapi.io/api/crud/registeredUsers",
      { userName: userName, email: email, password: password }
    ).then(() => {
      navigate("/login");
    });
    console.log(userName, " ", password);
    localStorage.setItem("userName", userName)
    localStorage.setItem("email",email)
    localStorage.setItem("password", password)
  };
  return (
    <div>
      <Navbar />
      <h1>Register</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form>
            <input
              className="text"
              type="text"
              name="Username"
              placeholder="Username"
              required=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="text email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="text"
              type="password"
              name="password"
              placeholder="Password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="SIGNUP"
              onClick={handleRegister}
            ></input>
          </form>
          <p>
            Already have an Account? <Link to={"/login"}> Login Now!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
