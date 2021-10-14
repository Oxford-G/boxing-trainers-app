import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import defaultState from '../../store/store';
import SignUp from '../../components/SignUp';

const mockStore = configureStore([]);

describe('SignUp', () => {
  let store;
  let component;
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore(defaultState);
    component = renderer.create(
      <Provider store={store}>
        <SignUp history={history} />
      </Provider>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
