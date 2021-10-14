import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../assets/styles/style.module.css';

const TrainerInfo = (props) => {
  const { trainer, handleClick } = props;
  const { name, trainerImg } = trainer;

  return (
    <Link to="/Trainer_profile" onClick={handleClick} className={`${styles.trainerInfo} ${styles.dFlex} ${styles.justifyContentCenter}`}>
      <figure>
        <img src={trainerImg} alt={name} className={`${styles.trainerImg}`} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );
};

TrainerInfo.propTypes = {
  trainer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    trainerImg: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TrainerInfo;
