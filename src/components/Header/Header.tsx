import React from 'react';
import { Logo } from '../Logo/Logo';
import './header.css';
import { BackBtn } from '../BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

export const Header: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <header className='header'>
      {location.pathname !== '/characters' && location.pathname !== '/' &&  <BackBtn />}
      <Logo />
    </header>
  );
};