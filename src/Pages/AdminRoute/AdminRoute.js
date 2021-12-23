import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(user.email) {
        return children
    }
    return <Navigate to="/login" state={{from : location}}/>;
};

export default AdminRoute;