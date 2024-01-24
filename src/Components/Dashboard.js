import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://659d149c633f9aee79088e38.mockapi.io/api/crud/registeredUsers"
    ).then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
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
        <h2 style={{ display: "flex", marginLeft: 100, flexDirection: "row" }}>
          Employee Data
        </h2>
        <h4>Fetch Api for Employee Data</h4>
        <table className="table">
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
            {data.map((e, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{e.userName}</td>
                  <td>{e.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
