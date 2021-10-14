import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/dom';
import defaultState from '../store/store';
import Navbar from '../components/Navbar';

const mockStore = configureStore([]);

describe('Navbar', () => {
  let root;
  let store;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('display Log in and Sign up buttons when there is no user logged', () => {
    store = mockStore(defaultState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar history={history} />
        </MemoryRouter>
      </Provider>,
      root,
    );

    const loginBtn = screen.getByText('LOG IN');
    const signupBtn = screen.getByText('SIGN UP');
    expect(loginBtn.type).toBe('button');
    expect(signupBtn.type).toBe('button');
  });

  it('display Appointments and Logout buttons when there is a user logged', () => {
    store = mockStore({
      user: {
        name: 'ryan',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar history={history} />
        </MemoryRouter>
      </Provider>,
      root,
    );

    const appointmentsBtn = screen.getByText('APPOINTMENTS');
    const logoutBtn = screen.getByText('LOG OUT');
    expect(appointmentsBtn.type).toBe('button');
    expect(logoutBtn.type).toBe('button');
  });
});
