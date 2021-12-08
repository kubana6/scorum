import React from 'react';
import style from './view.module.css';

const Button = ({ children, onClick, isSmall = false}) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;