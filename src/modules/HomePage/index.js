import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import style from './view.module.css';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <p className={style.balance}>Your balance: 5677457457</p>
      <div className={style.content}>
        <div className={style.card}>
          <Card />
          <Button onClick={() => { }}>Left</Button>
        </div>
        <div className={style.card}>
          <Button onClick={() => { }}>Right</Button>
          <Card />
        </div>
      </div>

    </div>
  )
}

export default HomePage;