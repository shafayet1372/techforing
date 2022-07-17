import React, { useState, useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register'
import PrivateRoute from './PrivateRoute';
import CreateJob from '../pages/CreateJob';
import isLoggedIn from '../js/AuthenticationCheck';



export default function Router() {


    return <BrowserRouter>
        <Routes>
            <Route path="/" element={isLoggedIn() ? <Home /> : <Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/add-job" element={<CreateJob />} />
            </Route>

        </Routes>
    </BrowserRouter>
}
