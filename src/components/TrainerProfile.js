import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../assets/styles/style.module.css';
import { appointmentCreate } from '../API/api';

const TrainerProfile = (props) => {
  const { trainer, user } = props;
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    const date = value.replace('T', ' ');
    setDate(date);
  };

  const handleClick = () => {
    const newDate = new Date(date);
    const now = new Date(Date.now());
    if (newDate.getTime() > now.getTime()) {
      const params = {
        time: newDate,
        userId: user.id,
        trainerId: trainer.id,
      };
      if (date !== null) {
        props.dispatch(appointmentCreate(params, props.history.push));
      }
    } else {
      toast.error(
        <div>
          Input date has passed.
          <br />
          Please introduce a valid date.
        </div>,
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  };

  const getDisplay = () => {
    if (Object.keys(user).length !== 0) {
      return (
        <div className={`${styles.profileBtnCont}`}>
          <div className={`${styles.pb1}`}>
            <div className={`${styles.mb1} ${styles.appointment}`}>Set an Appointment</div>
            <input type="datetime-local" onChange={handleChange} />
            <button type="button" className={`${styles.ml1} ${styles.appointmentBtn}`} onClick={handleClick}>Submit</button>
          </div>
        </div>
      );
    }
    return (
      <Link to="/Log_in" className={`${styles.btnRed}`}>Please log in to make appointments</Link>
    );
  };

  return (
    <div className={`${styles.dFlex} ${styles.trainerProfile}`}>
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
      <div className={`${styles.width50p} ${styles.dFlex} ${styles.justifyContentCenter}`}>
        <img className={`${styles.trainerPImg}`} src={trainer.trainerImg} alt={trainer.name} />
      </div>
      <div className={`${styles.width50p}`}>
        <div className={`${styles.profileTitle}`}>{trainer.name}</div>
        <div className={`${styles.profileFighting}`}>
          Figthing Style:
          {' '.concat(trainer.fightingStyle)}
        </div>
        <div className={`${styles.profileDesc} ${styles.mb1}`}>{trainer.description}</div>
        { getDisplay() }
      </div>
    </div>
  );
};

TrainerProfile.propTypes = {
  trainer: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  trainer: state.currentTrainer,
});

export default connect(mapStateToProps)(TrainerProfile);
