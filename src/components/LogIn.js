import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { userRequest } from '../API/api';
import styles from '../assets/styles/style.module.css';

const LogIn = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setUserEmail(value);
    } else {
      setUserPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { email: userEmail, password: userPassword };
    props.dispatch(userRequest(params, props.history.push, toast));
  };

  return (
    <div className={`${styles.login} ${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentCenter}`}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={`${styles.sessionTitle}`}>Log In</div>
      <form className={`${styles.mt2} ${styles.form} ${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentCenter}`}>
        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />
        <br />
        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
        <br />
        <button type="submit" onClick={handleSubmit} className={`${styles.formBtn}`}>Submit</button>
      </form>
    </div>
  );
};

LogIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(LogIn);
