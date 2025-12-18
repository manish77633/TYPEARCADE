// App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Spotlight from './components/Spotlight';
import Home from './components/home';
import Footer from './components/footer';
import './App.css';
import AboutSection from './pages/Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Router>
       
           
            <Navbar 
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme} 
            />

            <Routes>
                
                 <Route 
                    path="/" 
                    element={
                        <>
                             <Spotlight currentTheme={currentTheme} />
                            <Home currentTheme={currentTheme} />
                           
                        </>
                    } 
                />
               
                <Route path="/about" element={<AboutSection currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />} />


                </Routes>

          
            <Footer />
        
     </Router>  
    );
}

export default App;