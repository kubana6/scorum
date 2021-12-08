import React from 'react';
import style from './view.module.css';

const Button = ({ children, onClick, form = false}) => {
  return (
    <button type={form ? 'submit' : 'button'} className={`${style.button} ${form && style.formButton}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;