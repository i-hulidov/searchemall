import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SearchProvider } from './contexts/SearchContext';
import { Search, Details, Welcome, Error } from './components/screens';
import { Header, Footer } from './components/composite';
import { routes } from './routes';
import ErrorBoundary from './utils/ErrorBoundary';

import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />}>
        <div className="app">
          <Header />
          <SearchProvider>
            <Routes>
              <Route path={routes.welcome} element={<Welcome />} />
              <Route path={routes.search} element={<Search />} />
              <Route path={routes.details} element={<Details />} />
            </Routes>
          </SearchProvider>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
