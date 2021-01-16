import React from 'react';

import { Arrow, Page, Typography, Wallpaper } from '../../components';

export const News: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        News
      </Typography>
      <Arrow />
      <Wallpaper route='news' />
    </Page>
  );
};
