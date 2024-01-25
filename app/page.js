"use client"
// Example component using dynamic themes
import React, { useState, useContext } from 'react';
import { lightTheme, darkTheme, forestTheme, fireTheme } from './components/Theme';
import themeContext from './context/themeContext';
// import ThemeState from './context/themeState';
import About from './components/about';
import Link from 'next/link'

const DynamicThemedComponent = () => {
  const { switchTheme, theme } = useContext(themeContext);
  
  return (
    <>
      
    <div className="bg-primary text-accent flex flex-col" style={{ backgroundColor: theme.primary, color: theme.accent }} >
      <p className="text-secondary">This is a dynamically themed component.</p>
      <button onClick={() => switchTheme('light')}>Light Theme</button>
      <button onClick={() => switchTheme('dark')}>Dark Theme</button>
      <button onClick={() => switchTheme('forest')}>Forest Theme</button>
      <button onClick={() => switchTheme('fire')}>Fire Theme</button>
    </div>
      <About/>
      <Link href="/about">About</Link>
    </>  
  );
};

export default DynamicThemedComponent;
