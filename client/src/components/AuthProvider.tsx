import React, { createContext, useContext, useState }from 'react';

const AuthContext = createContext(null);

export function useAunth() {
  return useContext(AuthContext);
}

export function AuthProvider( {children} ) {

  const [currentUser, setCurrentUser] = useState("")l

  const 

  return (
    <AuthContext.Provider value ={value}>
      {children}
    </AuthContext.Provider>
  )
}
