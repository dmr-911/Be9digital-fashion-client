import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading) { 
    return (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
  }
  if(user.email){
      return children
  }
  return <Navigate to="/login" state={{from : location}} />
};

export default PrivateRoute;