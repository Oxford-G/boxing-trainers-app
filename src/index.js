import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import Routes from './routes/Routes';
import defaultState from './store/store';
import userReducer from './reducers/userReducer';
import currentReducer from './reducers/currentReducer';
import trainersReducer from './reducers/trainerReducer';
import { trainerListRequest } from './API/api';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/index.css';

const rootReducer = combineReducers({
  user: userReducer,
  currentTrainer: currentReducer,
  trainers: trainersReducer,
});

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

store.dispatch(trainerListRequest);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
