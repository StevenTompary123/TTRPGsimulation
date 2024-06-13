import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Character",
    element: <Character />,
  },
]);

function App() {
  return <div>Hello world</div>;
}

export default App;
