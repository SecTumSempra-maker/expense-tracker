import React from "react";

const AuthLayouts = ({ children }) => {
  return (
    <div>
      <div>
        <h2 className="">Expense Tracker</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
