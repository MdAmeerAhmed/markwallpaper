import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

 
 

function Layout() {
    return (
        <div>
             
            <Navbar />
            <main>
                <Outlet />
            </main>
            
            <Footer />
             <FloatingButtons /> 
        </div>
    );
}

export default Layout;
