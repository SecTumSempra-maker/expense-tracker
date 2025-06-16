import React from "react";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <route path="/login" exact element={<Login />} />
          <route path="/login" exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
