import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link to={"/"} style={{ color: "white" }}>
          Home
        </Link>
        <Link to={"/services"} style={{ color: "white" }}>
          Services
        </Link>
        <Link to={"/about"} style={{ color: "white" }}>
          About
        </Link>
        <Link to={"/dashboard"} style={{ color: "white" }}>
          Dashboard
        </Link>
        <Link to={"/login"} style={{ color: "white" }}>
          Login
        </Link>
        <Link to={"/register"} style={{ color: "white" }}>
          Register
        </Link>
      </nav>
    </div>
  );
};
