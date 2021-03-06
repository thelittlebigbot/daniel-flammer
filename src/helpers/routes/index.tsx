import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import {
  Biography,
  Contact,
  Map,
  News,
  NotFound,
  Publications,
  Series,
  Slug,
} from '../../routes';

interface Props {
  component: React.FC;
  index: number;
  name: string;
  path: string;
  visible: boolean;
}

export const routes: Props[] = [
  {
    component: Biography,
    index: 4,
    name: 'Biography',
    path: '/biography',
    visible: true,
  },
  {
    component: Contact,
    index: 6,
    name: 'Contact',
    path: '/contact',
    visible: true,
  },
  {
    component: Map,
    index: 0,
    name: 'Map',
    path: '/',
    visible: false,
  },
  {
    component: News,
    index: 2,
    name: 'News',
    path: '/news',
    visible: true,
  },
  {
    component: NotFound,
    index: 0,
    name: '404: Page Not Found',
    path: '/404',
    visible: false,
  },
  {
    component: Publications,
    index: 5,
    name: 'Publications',
    path: '/publications',
    visible: true,
  },
  {
    component: Series,
    index: 1,
    name: 'Series',
    path: '/series',
    visible: true,
  },
  {
    component: Slug,
    index: 7,
    name: 'Slug',
    path: '/series/:slug',
    visible: false,
  },
];

export const Routes: React.FC = () => {
  React.useEffect(() => {}, []);

  return (
    <AnimatePresence>
      <Switch>
        {routes.map((i, key) => {
          return (
            <Route
              key={key}
              exact
              path={i.path}
              component={withRouter(i.component)}
            />
          );
        })}
        <Redirect to='/404' />
      </Switch>
    </AnimatePresence>
  );
};
