import React from 'react'
import style from './view.module.css';

const Input = (props) => {
  const { error } = props;
  return <div className={style.inputWrapper}>
    <input {...props} className={`${style.input} ${error && style.errorBorder}`} />
    {error && (<p className={style.errors}>{error}</p>)}
  </div>
}

export default Input;