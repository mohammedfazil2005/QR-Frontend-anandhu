import React, { createContext, useState } from "react";

export const empContext = createContext();

const EmployeeContext = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  return (
      <empContext.Provider value={{ employee, setEmployee }}>
        {children}
      </empContext.Provider>
    
  );
};

export default EmployeeContext;
