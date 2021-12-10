import React from 'react';
import Button from '../Button';
import style from './view.module.css';

const Header = function ({ isLogout, logOut }) {
  return (
    <header className={style.header}>
      <p className={style.logo}>Bridge</p>
      {isLogout && (<Button onClick={logOut}>SignOut</Button>)}
    </header>
  );
};

export default Header;
