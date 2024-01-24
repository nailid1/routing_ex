import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar";
import { Dashboard } from "./Components/Dashboard";
import { Profile } from "./Components/Profile";
import { ProtectedRoute } from "./utillsProtected/ProtectedRoute";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import Page404 from "./Components/Page404";

function App() {
  const route = createBrowserRouter([
    {
      path: "navbar",
      Component: Navbar,
    },
    {
      path: "",
      Component: Home,
    },
    { path: "register", Component: Register },
    { path: "login", Component: Login },
    { path: "about", Component: About },
    { path: "services", Component: Services },
    {
      path: "dashboard",
      element: <ProtectedRoute Component={Dashboard} />,
    },
    {
      path: "profile",
      element: <ProtectedRoute Component={Profile} />,
    },
    {
      path: "*",
      element: <Page404 />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
