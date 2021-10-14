import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { userCreate } from '../API/api';
import styles from '../assets/styles/style.module.css';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPConfirm, setUserPConfirm] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name': {
        setUserName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setUserPassword(value);
        break;
      }
      default: {
        setUserPConfirm(value);
      }
    }
  };

  const handleSubmit = () => {
    const params = {
      name: userName,
      email: userEmail,
      password: userPassword,
      passwordConfirm: userPConfirm,
    };
    props.dispatch(userCreate(params, props.history.push, toast));
  };

  return (
    <div className={`${styles.login}`}>
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
      <div className={`${styles.sessionTitle}`}>SignUp</div>
      <div className={`${styles.mt2} ${styles.form} ${styles.dFlex} ${styles.flexColumn} ${styles.justifyContentCenter}`}>
        <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} className={`${styles.mb1}`} />
        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} className={`${styles.mb1}`} />
        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} className={`${styles.mb1}`} />
        <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" onChange={handleChange} />
        <button type="button" onClick={handleSubmit} className={`${styles.mt2} ${styles.formBtn}`}>Submit</button>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(SignUp);
