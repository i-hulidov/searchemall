import React from 'react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import { Details, Search, Welcome } from 'src/components/screens';
import PokemonNotFound from 'src/components/shared/PokemonNotFound/PokemonNotFound';
import { routes } from 'src/data/constants/routes';

const Routes = () => (
  <RouterRoutes>
    <Route path={routes.welcome} element={<Welcome />} />
    <Route path={routes.search} element={<Search />} />
    <Route path={routes.details} element={<Details />} />
    <Route path={routes.notFound} element={<PokemonNotFound isPageNotFound />} />
    <Route path="*" element={<Navigate to={routes.notFound} replace />} />
  </RouterRoutes>
);

export default Routes;
