import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Componend/Hook/Firebase.config";

export const Auth = createContext();


const AuthContext =({children}) =>{
  const [user,setUser]= useState("")

  const auth = getAuth(app)

const createUser =(email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
}
  
const signInUser =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)
}

const LogOut = (auth)=>{
  signOut(auth)
}
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser);
        
      });
      return () => {
        unsubscribe();
      };
    }, []);
    
    

  const userInfo = {
   createUser,
   signInUser,
   user,
   LogOut
   
  };
  return <Auth.Provider value={userInfo}>{children}</Auth.Provider>;
};
    
export default AuthContext;
