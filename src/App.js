import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home";
import { Register } from "./Components/Register";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      Component: Home,
    },
    { path: "register", Component: Register },
  ]);
  return (
    <div className="App">
      <h1>Hi! this is example of routing</h1>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
