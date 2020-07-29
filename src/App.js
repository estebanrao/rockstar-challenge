import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';

import ErrorBoundary from './components/error-boundary/error-boundary.component';
import HomePage from './pages/home/home.component';
import DetailsPage from './pages/details/details.component';

import './App.scss';

function App() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        suspense: true,
      }}
    >
      <BrowserRouter>
        <Switch>
          <ErrorBoundary
            fallback={<h1>An error ocurred when loading your data</h1>}
          >
            <Suspense fallback={<h1>Loading</h1>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/details/:id" component={DetailsPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
