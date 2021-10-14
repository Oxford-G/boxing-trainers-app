import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import LeftMenu from '../../components/LeftMenu';

describe('LeftMenu', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <MemoryRouter>
        <LeftMenu />
      </MemoryRouter>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
