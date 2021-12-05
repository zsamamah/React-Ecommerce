import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import Hero from "./Components/Hero";
import Navbar from "./Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Checkout from "./Components/checkout";
import Shop from "./Components/Shop";
import Admin from "./pages/admin";

ReactDOM.render(
  <>
    <Router>
      <React.StrictMode>
        <Navbar />
        <App />
      </React.StrictMode>
    </Router>
  </>,
  document.getElementById("root")
);
