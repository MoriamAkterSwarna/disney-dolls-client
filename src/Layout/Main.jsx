import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Home from '../Pages/Home/Home';

const Main = () => {
    return (
        <div>
           <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;