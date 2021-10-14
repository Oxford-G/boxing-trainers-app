const CHANGE_CURRENT = 'CHANGE_CURRENT';

const currentReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default currentReducer;
