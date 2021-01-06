import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  Artboard,
  Biography,
  Contact,
  Map,
  News,
  NotFound,
  Publications,
  Series,
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
    component: Artboard,
    index: 1,
    name: 'Artboard',
    path: '/artboard',
    visible: true,
  },
  {
    component: Biography,
    index: 2,
    name: 'Biography',
    path: '/biography',
    visible: true,
  },
  {
    component: Contact,
    index: 0,
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
    index: 0,
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
    index: 0,
    name: 'Publications',
    path: '/publications',
    visible: true,
  },

  {
    component: Series,
    index: 0,
    name: 'Series',
    path: '/series',
    visible: true,
  },
];

export const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map((i, key) => {
        return <Route key={key} exact path={i.path} component={i.component} />;
      })}
      <Redirect to='/404' />
    </Switch>
  );
};
