import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading) { 
    return (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
  }
  return user.email ? children : <Navigate to="/login"  state={{ from: location }}/>;
};

export default PrivateRoute;