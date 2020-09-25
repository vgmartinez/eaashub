import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import Logo from '../images/logo.png';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" style={{ width: '10%', height: '5%' }} />
      <div className="dark-mode-toggle" style={{ justifyContent: 'flex-end', margin: '10px' }}>
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      </div>
    </div>
  );
};

export default DarkModeToggle;
