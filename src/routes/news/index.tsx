import React from 'react';
import { newsShape } from '../../assets';

import { Arrow, Page, Typography, Shape } from '../../components';

export const News: React.FC = () => {
  return (
    <Page shape={newsShape}>
      <Typography type='title' variant='big'>
        News
      </Typography>
      <Arrow />
      <Shape route='news' />
    </Page>
  );
};
