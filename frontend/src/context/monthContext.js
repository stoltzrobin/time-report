import React, { createContext, useContext, useReducer } from "react";

const MonthContext = createContext();

export const MonthProvider = ({ reducer, initialState, children }) => {
  const monthReducer = useReducer(reducer, initialState);
  return (
    <MonthContext.Provider value={monthReducer}>
      {children}
    </MonthContext.Provider>
  );
};

export const useMonthContext = () => useContext(MonthContext);
