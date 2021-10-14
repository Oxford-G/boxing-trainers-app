import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/style.module.css';

const LeftMenu = () => (
  <aside className={`${styles.leftMenu}`}>
    <ul className={`${styles.leftList} ${styles.mt5} ${styles.ml25p}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/how_to">How to</Link>
      </li>
      <li>
        <Link to="/trainers">Trainers</Link>
      </li>
    </ul>
  </aside>
);

export default LeftMenu;
