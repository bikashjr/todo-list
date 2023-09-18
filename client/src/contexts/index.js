import React, { createContext } from "react";
import useApi from "../hooks/useApi";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const api = useApi();

  return <DataContext.Provider value={api}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
