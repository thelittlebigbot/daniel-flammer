import React from 'react';
import { publicationsShape } from '../../assets';

import { Arrow, Page, SEO } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page shape={publicationsShape}>
      <SEO title='Publications' description='...' keywords='...' />
      <Arrow />
    </Page>
  );
};
