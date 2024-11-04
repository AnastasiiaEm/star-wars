import React, { ReactNode } from 'react';
import './main.css';

type MainProps = {
  children: ReactNode;
}

export const Main: React.FC<MainProps>= ({children}) => {
  return (
    <main className='main'>
      {children}
    </main>
  );
};