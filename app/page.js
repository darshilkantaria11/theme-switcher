"use client"
// Example component using dynamic themes
import React, { useState } from 'react';
import { lightTheme, darkTheme, forestTheme, fireTheme } from './components/Theme';


const DynamicThemedComponent = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const switchTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
  <>
 
    <div
      className="bg-primary text-accent flex flex-col"
      style={{ backgroundColor: currentTheme.primary, color: currentTheme.accent }}
    >
      <p className="text-secondary">This is a dynamically themed component.</p>
      <button onClick={() => switchTheme(lightTheme)}>Light Theme</button>
      <button onClick={() => switchTheme(darkTheme)}>Dark Theme</button>
      <button onClick={() => switchTheme(forestTheme)}>Forest Theme</button>
      <button onClick={() => switchTheme(fireTheme)}>Fire Theme</button>
    </div>
    </>
  );
};

export default DynamicThemedComponent;
