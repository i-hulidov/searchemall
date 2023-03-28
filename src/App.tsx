import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from './contexts/SearchContext';
import { Search, Details, Welcome, Error } from './components/screens';
import { routes } from './routes';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />}>
        <SearchProvider>
          <Routes>
            <Route path={routes.welcome} element={<Welcome />} />
            <Route path={routes.search} element={<Search />} />
            <Route path={routes.details} element={<Details />} />
          </Routes>
        </SearchProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
