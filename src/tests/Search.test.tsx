import React, { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from 'src/App';
import { SearchProvider } from 'src/components/shared/SearchProvider';
import { SearchContext } from 'src/contexts/SearchContext';

const CustomTest = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  console.log('searchQuery', searchQuery);
  return (
    <div>
      <div data-testid="search-query">{JSON.stringify(searchQuery)}</div>
      <input data-testid="search-input" onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
};

describe('Search functionality', () => {
  it('input', () => {
    render(
      <SearchProvider>
        <CustomTest />
      </SearchProvider>,
    );

    const element = screen.getByTestId('search-query');
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'Pikachu' } });

    expect(element).toHaveTextContent('Pikachu');
  });
});
