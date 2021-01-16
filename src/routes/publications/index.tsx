import React from 'react';

import { Page, Typography, Wallpaper } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        Publications
      </Typography>
      <Wallpaper route='publications' />
    </Page>
  );
};
