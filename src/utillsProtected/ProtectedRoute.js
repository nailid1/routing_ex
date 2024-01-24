import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("login");
    }
  });
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    alert("you have logged out");
  };
  return (
    <div>
      <Component />
      <div
        style={{ display: "flex", margin: 10, flexDirection: "row-reverse" }}
      >
        <button className="btn btn-danger" onClick={handleLogout}>
          {" "}
          Log Out
        </button>
      </div>
    </div>
  );
};
