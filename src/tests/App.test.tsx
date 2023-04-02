import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from 'src/App';

describe('App', () => {
  it('renders', () => {
    render(<App />);

    const element = screen.getByTestId('header');

    expect(element).toHaveTextContent("Search 'Em All");
  });
});
