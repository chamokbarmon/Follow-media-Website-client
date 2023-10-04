import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useContext } from 'react';
import { Auth } from '../Contexts/AuthContext';


const PrivateRoute = () => {
   const user = useContext(Auth)
   console.log(user);

    onAuthStateChanged(auth, (user) => {
        if (user) {
              console.log(user.displayName);
              const uid = user.uid;
         
        } else {
          
        }
      });
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;