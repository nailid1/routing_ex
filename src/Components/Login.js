import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("");
    }
  });

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("clicked login");
    localStorage.setItem("login", true);
    navigate("/");
    alert("you have logged in .");
  };

  // const validLogin = () => {
  //   if (email === loginEmail && password === loginPassword){
  //     const data = localStorage.getItem("email", "password")
  //   }
  // }

  // const handleLogin = (e) => {
  //   // login()
  //   if (email === loginEmail && password === loginPassword) {
  //     // const data = localStorage.getItem("email", "password");
  //     e.preventDefault();
  //     navigate("/dashborad");
  //   } else {
  //     navigate("/login");
  //   }
  //   console.log(
  //     "email ",
  //     email,
  //     "login Email ",
  //     loginEmail,
  //     "password ",
  //     password,
  //     "login Password ",
  //     loginPassword
  //   );
  //   console.log(email === loginEmail && password === loginPassword);
  // };
  return (
    <div>
      <Navbar />
      <h1>Login Here</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p>
              New User ? <Link to={"/register"}> Register Now!</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
