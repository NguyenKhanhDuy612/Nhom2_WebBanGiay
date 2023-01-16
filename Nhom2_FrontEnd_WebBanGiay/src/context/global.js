import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
export const StoreContextUser = createContext();
export const useContextUser = () => useContext(StoreContextUser);

export const DataProviderUser = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [flag,setFlag]=useState(false)
  const data = {
    totalCart,
    setTotalCart,
    flag,setFlag
  };
  StoreContextUser.displayName = "Global State ";
  return (
    <StoreContextUser.Provider value={data}>
      {children}
    </StoreContextUser.Provider>
  );
};
