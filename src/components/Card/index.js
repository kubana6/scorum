import React from 'react';
import style from './view.module.css';

const Card = function ({ url }) {
  return (
    <div className={style.card} style={{ backgroundImage: `url(${url || '	https://i.pinimg.com/originals/38/52/18/385218163958b5817ded6373dd9f01a6.png'})` }} />
  );
};

export default Card;
