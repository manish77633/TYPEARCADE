// components/navbar.jsx

import React, { useState, useEffect, useRef } from 'react'; 
// Hum MoonIcon ke saath Sun Icon bhi use kar lete hain
import { IoMdMoon, IoMdSunny } from 'react-icons/io'; 

// Props receive kiye
export default function Navbar({ currentTheme, setCurrentTheme }) { 
    
    // ⭐ No local state needed for dropdown/click outside ⭐

    // ⭐ New Simple Toggle Logic ⭐
    const handleSimpleToggle = () => {
        // Agar current theme 'dark' hai, toh 'light' set karo.
        // Agar 'light' ya 'system' (jo light mode mein render ho raha hai) hai, toh 'dark' set karo.
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Parent ke setter ko call kiya
        setCurrentTheme(newTheme); 
    };

    // Icon ko dynamically change karne ke liye
    const IconComponent = currentTheme === 'dark' ? IoMdSunny : IoMdMoon;
    const iconClassName = currentTheme === 'dark' ? 'text-white' : 'text-gray-900';


    return (
        <nav className="navbar bg-white dark:bg-black p-4 text-gray-900 dark:text-white flex justify-between items-center h-[80px] transition-colors duration-300 relative z-10 border-b border-gray-200 dark:border-gray-700">
            
            <h2 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">TypeArcade</h2>
            
            <ul className="nav-links flex space-x-4 items-center">
                <li><a href="/Singleplayer">Play Now</a></li>
                <li><a href="/Multiplayer">Play with Friends</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/leaderboard">Leaderboard</a></li>
                
                {/* ⭐ Simple Theme Toggle Button ⭐ */}
                <li className="relative z-50"> 
                    <button 
                        onClick={handleSimpleToggle} // Direct toggle function call
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-150"
                    >
                        <IconComponent className={`text-xl text-yellow-600 dark:text-yellow-400`} /> 
                    </button>
                </li>
                
                {/* Join Now Button */}
                <li>
                    <button className="bg-yellow-500 p-2 pl-4 text-white font-semibold pr-4 rounded-full flex items-center space-x-1 hover:bg-yellow-600 transition duration-150">
                        <span>Join Now </span> 
                        <span className="text-lg leading-none"> &rarr;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}