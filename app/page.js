"use client"
// Example component using dynamic themes
import React, { useContext } from 'react';

import themeContext from './context/themeContext';

import About from './components/about';
import Link from 'next/link'

const DynamicThemedComponent = () => {
  const { switchTheme, theme } = useContext(themeContext);

  return (
    <>

      <div className="bg-primary text-accent flex flex-col" style={{ backgroundColor: theme.secondary, color: theme.accent }} >
        <p className="text-secondary">This is a dynamically themed component.</p>
        <button onClick={() => switchTheme('light')}>Light Theme</button>
        <button onClick={() => switchTheme('dark')}>Dark Theme</button>
        <button onClick={() => switchTheme('forest')}>Forest Theme</button>
        <button onClick={() => switchTheme('fire')}>Fire Theme</button>
        <button onClick={() => switchTheme('valentine')}>valentine Theme</button>
        <button onClick={() => switchTheme('aqua')}>aqua Theme</button>
        <button onClick={() => switchTheme('black')}>black Theme</button>
        <button onClick={() => switchTheme('lemonade')}>lemonade Theme</button>
      </div>
      <About />
      <Link href="/about">About</Link>
    </>
  );
};

export default DynamicThemedComponent;
