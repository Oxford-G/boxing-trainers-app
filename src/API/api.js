import setTrainersAction from '../actions/trainers';
import { logUserInAction } from '../actions/user';

const trainerListRequest = async (dispatch) => {
  const result = await fetch('https://fathomless-journey-92945.herokuapp.com/trainers').then((res) => res.json());
  dispatch(setTrainersAction(result));
};

const userRequest = (params, push, toast) => async (dispatch) => {
  const urlParams = `?email=${params.email}&password=${params.password}`;
  const result = await fetch('https://fathomless-journey-92945.herokuapp.com/login'.concat(urlParams)).then((res) => res.json());
  if (result.name) {
    dispatch(logUserInAction(result));
    push('/');
  }
  if (result.status) {
    const message = result.status === 'NO EXIST' ? 'User doesn\'t exist' : 'Wrong Password or Name';
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const userCreate = (params, push, toast) => async (dispatch) => {
  const data = params;
  const url = `https://fathomless-journey-92945.herokuapp.com/users?name=${data.name}&email=${data.email}&password=${data.password}&password_confirmation=${data.passwordConfirm}`;
  const send = {
    method: 'POST',
  };

  const result = await fetch(
    url,
    send,
  ).then((res) => res.json());
  if (result.name) {
    push('/');
    dispatch(logUserInAction(result));
  }
  if (result.message) {
    const message = result.message.includes('blank') ? 'No space can be blank' : result.message.slice(19);
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const appointmentCreate = (data, push) => async () => {
  const url = `https://fathomless-journey-92945.herokuapp.com/users/${data.userId}/appointments?user_id=${data.userId}&trainer_id=${data.trainerId}&appointmentTime=${data.time}`;
  const send = {
    method: 'POST',
  };
  fetch(
    url,
    send,
  ).then((res) => {
    push('/My_appointments');
    return res.json();
  });
};

const appointmentGet = async (set, id) => {
  const url = `https://fathomless-journey-92945.herokuapp.com/users/${id}/appointments`;

  const result = await fetch(
    url,
  ).then((res) => res.json());
  set(result);
};

export {
  trainerListRequest,
  userRequest,
  userCreate,
  appointmentCreate,
  appointmentGet,
};
