import React from 'react';
import { publicationsShape } from '../../assets';

import { Arrow, Page, Typography, Shape } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page shape={publicationsShape}>
      <Arrow />
      <Shape route='publications' />
    </Page>
  );
};
