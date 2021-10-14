const SET_USER = 'SET_USER';
const UNSET_USER = 'UNSET_USER';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    case UNSET_USER: {
      return {};
    }
    default:
      return state;
  }
};

export default userReducer;
