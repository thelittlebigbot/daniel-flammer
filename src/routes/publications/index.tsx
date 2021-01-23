import React from 'react';
import { publicationsShape } from '../../assets';

import { Arrow, Page, SEO, Shape } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page shape={publicationsShape}>
      <SEO title='Publications' description='...' keywords='...' />
      <Arrow />
      <Shape route='publications' />
    </Page>
  );
};
