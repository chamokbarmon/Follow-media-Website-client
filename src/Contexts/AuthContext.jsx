import { createContext, useState } from "react";

export const Auth = createContext(null);
const AuthContext = ({children}) => {
    
  const createUser =()=>{
       

  }



  const userInfo = {
   
  };
  return <Auth.Provider value={userInfo}>{children}</Auth.Provider>;
};

export default AuthContext;
