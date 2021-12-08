import React from 'react';
import Header from '../Header';
import style from './view.module.css';

const Layout = ({logOut, children, isLogout = true }) => {
  return (
    <div className={style.layout}>
      <Header logOut={logOut} isLogout={isLogout}/>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default Layout;