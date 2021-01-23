import React from 'react';
import { newsShape } from '../../assets';

import { Arrow, Page, Shape } from '../../components';

export const News: React.FC = () => {
  return (
    <Page shape={newsShape}>
      <Arrow />
      <Shape route='news' />
    </Page>
  );
};
