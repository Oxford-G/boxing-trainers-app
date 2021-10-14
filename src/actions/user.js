const logUserInAction = (user) => ({
  type: 'SET_USER',
  payload: user,
});

const logUserOutAction = () => ({
  type: 'UNSET_USER',
});

export { logUserInAction, logUserOutAction };
