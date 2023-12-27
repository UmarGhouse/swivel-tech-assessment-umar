"use client"

import { createContext, useContext } from 'react';

const EmployeeContext = createContext();

export function EmployeeProvider({ employees, children }) {
  return (
    <EmployeeContext.Provider value={employees}>
      {children}
    </EmployeeContext.Provider>
  );
}

export const useEmployees = () => {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("Called useEmployees before setting EmployeeProvider context");
  }
  
  return context;
};
