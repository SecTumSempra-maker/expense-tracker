import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <route path="/login" exact element={<Login />} />
          <route path="/signup" exact element={<SignUp />} />
          <route path="/dashboard" exact element={<Home />} />
          <route path="/income" exact element={<Income />} />
          <route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  // checking if token exists
  const isAuthenticated = !!localStorage.getItem("token");

  //logic for navigation if token exists or not
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
