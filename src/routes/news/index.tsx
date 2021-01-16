import React from 'react';

import { Page, Typography, Wallpaper } from '../../components';

export const News: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        News
      </Typography>
      <Wallpaper route='news' />
    </Page>
  );
};
