import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Tourse from '../pages/Tourse';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultList from '../pages/SearchResultList';



const Router = () => {
    return (
        
        <Routes>

           <Route path='/' element={<Navigate to='/home'></Navigate>} /> 

            <Route path="/home" element={<Home/>} />
            <Route path="/tours" element={<Tourse/>} />
            <Route path="/tours/:id" element={<TourDetails/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/tours/search" element={<SearchResultList/>} />
 
        
           


        </Routes>
    );
};

export default Router;