import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import app from '../Componend/Hook/Firebase.config';

const PrivateRoute = () => {
    const auth = getAuth(app)

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