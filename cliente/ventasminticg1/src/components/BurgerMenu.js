import React, { useState } from 'react';
import '../styles/BurgerStyles.css';

const BurgerMenu = ({onClick}) => {
  const [status, setStatus] = useState('close');
  return (

      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() =>
            setStatus(status === 'open' ? 'close' : 'open'  )&onClick()}
            
      >
        <p className={status}></p>
        <p className={status}></p>
        <p className={status}></p>
      </div>

  );
};

export default BurgerMenu;