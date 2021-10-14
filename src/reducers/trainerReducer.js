const SET_TRAINERS = 'SET_TRAINERS';

const trainersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRAINERS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default trainersReducer;
