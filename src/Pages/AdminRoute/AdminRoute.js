import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user, admin} = useAuth();
    const location = useLocation();
    if (!admin) {
      return (
        <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
        <div>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        </div>
         </div>
      )
    }
  return user.email && admin ? children : <Navigate to="/"  state={{ from: location }}/>;
};

export default AdminRoute;