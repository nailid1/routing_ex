import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <Navbar />
      <nav className="navbar navbar-dark bg-dark">
        <Link to={"/dashboard"} style={{ color: "white" }}>
          Dashboard
        </Link>
        <Link to={"/profile"} style={{ color: "white" }}>
          Profile
        </Link>
      </nav>
      Profile Page
    </div>
  );
};
