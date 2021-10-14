import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appointmentGet } from '../API/api';
import styles from '../assets/styles/style.module.css';

const AppointmentList = (props) => {
  const { user, trainers } = props;
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    appointmentGet(setAppointments, user.id);
  }, []);

  const getRigthTime = (a) => {
    const result = a.appointmentTime.split('T');
    result[0] = result[0].split('-');
    return result;
  };

  return (
    <div className={`${styles.dFlex} ${styles.flexColumn} ${styles.alignItemsCenter} ${styles.appointments}`}>
      <h1>{user.name.concat(' Appointments')}</h1>
      <table className={`${styles.table} ${styles.mt2}`}>
        <thead>
          <tr>
            <td className={styles.tableHead}>Trainer</td>
            <td className={styles.tableHead}>Date</td>
            <td className={styles.tableHead}>Hour</td>
          </tr>
        </thead>
        { appointments && appointments.map((appointment) => {
          const date = getRigthTime(appointment);
          return (
            <tbody key={appointment.id}>
              <tr>
                <td>{trainers[appointment.trainer_id - 1].name}</td>
                <td>{`${date[0][2]}-${date[0][1]}-${date[0][0]}`}</td>
                <td>{`${date[1].slice(0, 5)}`}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

AppointmentList.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  trainers: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  trainers: state.trainers,
});

export default connect(mapStateToProps)(AppointmentList);
