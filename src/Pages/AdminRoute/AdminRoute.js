import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user, admin} = useAuth();
    const location = useLocation();
  return user.email && admin ? children : <Navigate to="/"  state={{ from: location }}/>;
};

export default AdminRoute;