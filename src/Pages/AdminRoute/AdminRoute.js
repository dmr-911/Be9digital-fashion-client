import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user, isLoading, admin} = useAuth();
    const location = useLocation();

    if(isLoading) { 
    return (
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
  }
  return user.email && admin ? children : <Navigate to="/"  state={{ from: location }}/>;
};

export default AdminRoute;