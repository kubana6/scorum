import React from 'react';
import Button from '../Button';
import style from './view.module.css';

const Header = ({isLogout}) => {
  return (
    <header className={style.header}>
      <p className={style.logo}>Bridge</p>
     { isLogout && (<Button onClick={() => {}}>SignOut</Button>)}
    </header>
  )
}

export default Header;