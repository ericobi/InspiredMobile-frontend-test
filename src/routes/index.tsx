import React from 'react';
import { renderRoutes } from 'react-router-config';

import Dashboard from '../pages/UsersList';
import NotFound from '../pages/NotFound';

const Root = ({ route }: any) => (
  <div className="main">{renderRoutes(route.routes)}</div>
);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
