import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TrainerInfo from '../components/TrainerInfo';
import changeCurrentTrainer from '../actions/current';
import styles from '../assets/styles/style.module.css';

const TrainerList = (props) => {
  const { trainers } = props;

  const handleLink = (trainer) => () => {
    props.dispatch(changeCurrentTrainer(trainer));
  };

  if (trainers === []) {
    return (
      <div>
        <h3>Getting Trainers...</h3>
      </div>
    );
  }
  return (
    <div className={`${styles.trainerList}`}>
      <h1 className={`${styles.title}`}>TRAINERS</h1>
      <div className={`${styles.dFlex} ${styles.flexWrap} ${styles.justifyContentBetween}`}>
        {trainers.map((trainer) => (
          <TrainerInfo
            key={trainer.name}
            trainer={trainer}
            handleClick={handleLink(trainer)}
          />
        ))}
      </div>
    </div>
  );
};

TrainerList.propTypes = {
  trainers: PropTypes.instanceOf(Array).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  trainers: state.trainers,
});

export default connect(mapStateToProps)(TrainerList);
