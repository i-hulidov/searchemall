import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'src/components/shared/ErrorBoundary/ErrorBoundary';
import { SearchProvider } from 'src/components/shared/SearchProvider';
import { Footer } from 'src/components/composite/Footer';
import { Header } from 'src/components/composite/Header';
import { Error } from 'src/components/screens';
import Routes from 'src/routes';

import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<Error />}>
        <div className="app">
          <Header />
          <SearchProvider>
            <Routes />
          </SearchProvider>
          <Footer />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
