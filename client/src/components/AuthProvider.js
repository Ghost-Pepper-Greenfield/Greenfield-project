import React, { createContext, useContext, useState, useEffect }from 'react';
import { auth } from '/Users/krissy/Desktop/Greenfield-project/client/firebase-config.js';

const AuthContext = createContext(null);


export function useAuth() {
  return useContext(AuthContext);
}


const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState("");

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  };

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((user) => (
      setCurrentUser(user)
    ))
    return unsubscribe
  }, [])
  

  const value = {
    currentUser,
    signup
  }

 
  return (
    <AuthContext.Provider value={{value}}>
      {children}
    </AuthContext.Provider>
  )
}
