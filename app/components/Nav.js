
"use client"

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check and apply saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="flex justify-between items-center p-5   shadow-md bg-white dark:bg-Dark_Mode_Elements sticky top-0 z-10">
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Where in the World?</h1>
      <button 
        className='flex items-center space-x-2' 
        onClick={toggleDarkMode}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size='lg' className='text-gray-900 dark:text-white' />
        <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </h3>
      </button>
    </nav>
  );
}

export default Nav;

