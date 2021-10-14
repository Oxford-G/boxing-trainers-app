import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import { act } from 'react-dom/test-utils';
import TrainerInfo from '../components/TrainerInfo';

describe('LeftMenu', () => {
  let testLocation;
  let trainer;
  let clickMock;

  beforeAll(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    clickMock = jest.fn();
    trainer = {
      name: 'Juan',
      trainerImg: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    };
    render(
      <MemoryRouter>
        <TrainerInfo trainer={trainer} handleClick={clickMock} />
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>,
      root,
    );
  });

  it('should go to trainers profile when a trainer card is clicked', () => {
    act(() => {
      const goToTrainerLink = document.querySelectorAll('a[href="/Trainer_profile"]');
      goToTrainerLink[0].click();
    });

    expect(testLocation.pathname).toBe('/Trainer_profile');
  });
});
