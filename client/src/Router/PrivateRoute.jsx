import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';
import isLoggedIn from '../js/AuthenticationCheck';

export default function PrivateRoute() {



    const [isLogged, setisLogged] = useState((isLoggedIn()))

    return isLogged ? <Outlet /> : <Navigate to="/" />
}
