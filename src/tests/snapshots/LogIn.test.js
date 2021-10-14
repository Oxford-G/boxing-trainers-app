import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import defaultState from '../../store/store';
import LogIn from '../../components/LogIn';

const mockStore = configureStore([]);

describe('LogIn', () => {
  let store;
  let component;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultState);
    component = renderer.create(
      <Provider store={store}>
        <LogIn history={history} />
      </Provider>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
