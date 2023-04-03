import React, { useContext } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { Search } from 'src/components/screens';
import { SearchProvider } from 'src/components/shared/SearchProvider';
import { SearchContext } from 'src/contexts/SearchContext';
import { wait } from 'src/utils/wait';

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
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 50 });
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 50 });
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight as any);
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth as any);
  });

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

  it('Pokemon is found by full name', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </BrowserRouter>,
    );

    const input = screen.getByTestId('input');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Bulbasaur' } });
      await wait(2000);
    });

    const i = getByTestId('bulbasaur');
    expect(i).toBeTruthy();
  });

  it('Pokemon is found by containing search string', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </BrowserRouter>,
    );

    const input = screen.getByTestId('input');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'saur' } });
      await wait(2000);
    });

    const i = getByTestId('bulbasaur');
    expect(i).toBeTruthy();
  });

  it('Pokemon is not found', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <SearchProvider>
          <Search />
        </SearchProvider>
      </BrowserRouter>,
    );

    const input = screen.getByTestId('input');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'Bulbasaur123' } });
      await wait(2000);
    });

    expect(getByTestId('not-found')).toBeTruthy();
  });
});
