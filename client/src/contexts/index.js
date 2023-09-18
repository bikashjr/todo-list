import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";

const APIContext = createContext(null);

export default function APIContextProvider({ children }) {
  const api = useApi();
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}

export const useAPIContext = () => {
  const context = useContext(APIContext);
  if (!context)
    throw new Error("API Context must be wrapped inside API Context Provider");
  return context;
};
