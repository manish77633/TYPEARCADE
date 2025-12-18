// App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Spotlight from './components/Spotlight';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';
import About from './pages/Aboutus';
import FAQ from './pages/FAQ';
import Service from './pages/Service';
import { Routes, Route } from 'react-router-dom';

// Function: Local Storage se initial theme uthana
const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPref = window.localStorage.getItem('theme');
        if (storedPref) {
            return storedPref;
        }
    }
    return 'system';
};

function App() {
    // ⭐ Theme State Ab Yahaan Hai ⭐
    const [currentTheme, setCurrentTheme] = useState(getInitialTheme);

    // useEffect: Theme ko HTML root class par apply karna
    useEffect(() => {
        const root = window.document.documentElement;
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Light Mode ke liye 'dark' class remove karo
        root.classList.remove('dark');

        // Dark Mode ya System Dark mein 'dark' class lagao
        if (currentTheme === 'dark' || (currentTheme === 'system' && isSystemDark)) {
            root.classList.add('dark');
        }

        window.localStorage.setItem('theme', currentTheme);

    }, [currentTheme]);



    return (
        <>

            {/* 1. Navbar ko setter aur getter dono pass kiye */}
            <Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

            <Routes>
                {/* Home Page Layout */}
                <Route path="/" element={
                    <>
                        <Spotlight currentTheme={currentTheme} />
                        <Home currentTheme={currentTheme} />
                    </>
                } />

                {/* FAQ Page */}
                 <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/service" element={<Service />} />
            </Routes>

            <Footer />
        
     </Router>  
    );
}

export default App;