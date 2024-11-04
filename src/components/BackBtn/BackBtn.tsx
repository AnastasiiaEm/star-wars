import React from 'react';
import './BackBtn.css'
import { useNavigate } from 'react-router-dom';

export const BackBtn: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button 
      type='button' 
      className='back-btn'
      onClick={handleBackClick}
      >
        Go Back
      </button>
  );
};