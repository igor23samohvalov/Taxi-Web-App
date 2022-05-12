import React from 'react';
import { Navigate } from 'react-router-dom';


const RequireAuth = ({ children }) => {

  return <Navigate to="/login" />;
  // return children;
}

export default RequireAuth