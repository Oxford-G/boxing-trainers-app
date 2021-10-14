import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logUserOutAction } from '../actions/user';
import Logo from '../assets/img/logo.png';
import styles from '../assets/styles/style.module.css';

const Navbar = (props) => {
  const { user } = props;

  const handleLogOut = () => {
    props.dispatch(logUserOutAction());
    props.history.push('/Log_in');
  };

  const getButtons = () => {
    if (Object.keys(user).length === 0) {
      return (
        <div className={`${styles.mr1}`}>
          <button className={`${styles.yellowBg} ${styles.navBtn}`} type="button" onClick={() => props.history.push('/Log_in')}>LOG IN</button>
          <button className={`${styles.yellowBg} ${styles.navBtn} ${styles.ml1} ${styles.mr1}`} type="button" onClick={() => props.history.push('/Sign_up')}>SIGN UP</button>
        </div>
      );
    }
    return (
      <div className={`${styles.mr1}`}>
        <button className={`${styles.yellowBg} ${styles.navBtn}`} type="button" onClick={() => props.history.push('/My_appointments')}>APPOINTMENTS</button>
        <button className={`${styles.yellowBg} ${styles.navBtn} ${styles.ml1} ${styles.mr1}`} type="button" onClick={handleLogOut}>LOG OUT</button>
      </div>
    );
  };

  return (
    <div className={`${styles.navbar} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentBetween}`}>
      <div src={Logo} alt="logo" className={`${styles.ml1} ${styles.navLogo}`}>Ohio Valley Wrestling</div>
      {getButtons()}
    </div>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Navbar);
