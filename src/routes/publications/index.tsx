import React from 'react';

import { Arrow, Page, Typography, Shape } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        Publications
      </Typography>
      <Arrow />
      <Shape route='publications' />
    </Page>
  );
};
