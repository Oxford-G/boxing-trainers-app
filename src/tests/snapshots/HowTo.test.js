import React from 'react';
import renderer from 'react-test-renderer';
import HowTo from '../../components/HowTo';

it('renders correctly', () => {
  const howTo = renderer
    .create(<HowTo />)
    .toJSON();
  expect(howTo).toMatchSnapshot();
});
