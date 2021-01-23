import React from 'react';
import { newsShape } from '../../assets';

import { Arrow, Page, SEO, Shape } from '../../components';

export const News: React.FC = () => {
  return (
    <Page shape={newsShape}>
      <SEO title='News' description='...' keywords='...' />
      <Arrow />
      <Shape route='news' />
    </Page>
  );
};
