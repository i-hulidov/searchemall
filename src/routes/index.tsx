import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { Details, Search, Welcome } from 'src/components/screens';
import { routes } from 'src/data/constants/routes';

const Routes = () => (
  <RouterRoutes>
    <Route path={routes.welcome} element={<Welcome />} />
    <Route path={routes.search} element={<Search />} />
    <Route path={routes.details} element={<Details />} />
  </RouterRoutes>
);

export default Routes;
