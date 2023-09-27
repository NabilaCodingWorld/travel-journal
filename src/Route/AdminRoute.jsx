import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {

    const location = useLocation();

    const { user, loading } = useAuth();

    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading ){
        return <p>Loading</p>
    }


    if(user && isAdmin){
        return children;
    }

    return <Navigate state={{from:location}} to="/login" replace ></Navigate>
};

export default AdminRoute;