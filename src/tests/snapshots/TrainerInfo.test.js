import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import TrainerInfo from '../../components/TrainerInfo';

describe('TrainerInfo', () => {
  let component;
  let trainer;
  let clickMock;

  beforeEach(() => {
    clickMock = jest.fn();
    trainer = {
      name: 'Juan',
      trainerImg: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    };
    component = renderer.create(
      <MemoryRouter>
        <TrainerInfo trainer={trainer} handleClick={clickMock} />
      </MemoryRouter>,
    );
  });

  it('should render propertly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
