import React from 'react';
import s from './Home.module.css';
import Child from './child.png';

export default function HomeView() {
  const child = Child;
  return (
    <div className={s.container}>
      <h1 className={s.title}>Ласкаво просимо!</h1>

      <img src={child} alt="" width="200" />
    </div>
  );
}
