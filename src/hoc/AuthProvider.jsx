import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLogged, setLogState] = useState(localStorage.getItem('token') !== null);

  const logIn = () => setLogState(true);
  const logOut = () => setLogState(false);

  const value = { isLogged, logIn, logOut };

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  );
}