import React from 'react';

import { Arrow, Page, Typography, Wallpaper } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        Publications
      </Typography>
      <Arrow />
      <Wallpaper route='publications' />
    </Page>
  );
};
