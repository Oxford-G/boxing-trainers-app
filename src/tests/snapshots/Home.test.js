import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/Home';

it('renders correctly', () => {
  const quotePage = renderer
    .create(<Home />)
    .toJSON();
  expect(quotePage).toMatchSnapshot();
});
