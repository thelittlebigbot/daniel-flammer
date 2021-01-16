import React from 'react';

import { Arrow, Page, Typography, Shape } from '../../components';

export const News: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        News
      </Typography>
      <Arrow />
      <Shape route='news' />
    </Page>
  );
};
