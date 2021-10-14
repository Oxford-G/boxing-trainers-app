import React from 'react';
import Logo from '../assets/img/logo.png';
import styles from '../assets/styles/style.module.css';

const Home = () => (
  <div className={`${styles.mt5}`}>
    <div className={`${styles.home} ${styles.margin0} ${styles.dFlex} ${styles.justifyContentCenter} ${styles.mr2} ${styles.alignItemsCenter}`}>
      <img src={Logo} alt="Academy logo" className={`${styles.homeLogo} ${styles.mr1}`} />
      <div>
        <h2 className={`${styles.title} ${styles.mb1}`}>Wrestling Academy</h2>
        <p className={`${styles.mb1}`}>
          WA is a wrestling academy that dedicates its efforts to train new and promising wrestlers,
          our environment takes the profession seriously, if you decide to train with us,
          we can assure you that we will take you to
          the top as we have done before with other wrestlers,
          now our alumni, winners of several tournaments, return home to train new wrestling stars,
          will you be the next face of wrestling?
        </p>
      </div>
    </div>
  </div>
);

export default Home;
