import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LoginPage";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
