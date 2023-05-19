

import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRouter = ({children}) => {
    
        const {user,loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <progress className="progress w-56 bg-blue-600"></progress>
    }
    else if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to='/login' replace></Navigate>
    );
};

export default PrivateRouter;