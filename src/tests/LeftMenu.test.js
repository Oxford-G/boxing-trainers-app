import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import { act } from 'react-dom/test-utils';
import LeftMenu from '../components/LeftMenu';

describe('LeftMenu', () => {
  let testLocation;

  beforeAll(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    render(
      <MemoryRouter>
        <LeftMenu />
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

  it('should go to home when home link is clicked', () => {
    act(() => {
      const goHomeLink = document.querySelectorAll('a[href="/"]');
      goHomeLink[0].click();
    });

    expect(testLocation.pathname).toBe('/');
  });

  it('should go to how to page when howTo link is clicked', () => {
    act(() => {
      const goHomeLink = document.querySelectorAll('a[href="/how_to"]');
      goHomeLink[0].click();
    });

    expect(testLocation.pathname).toBe('/how_to');
  });

  it('should go to trainers list page when trainers link is clicked', () => {
    act(() => {
      const goHomeLink = document.querySelectorAll('a[href="/trainers"]');
      goHomeLink[0].click();
    });

    expect(testLocation.pathname).toBe('/trainers');
  });
});
