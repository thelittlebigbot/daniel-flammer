import React from 'react';
import { publicationsShape } from '../../assets';

import { Arrow, Page, Typography, Shape } from '../../components';

export const Publications: React.FC = () => {
  return (
    <Page shape={publicationsShape}>
      <Typography type='title' variant='big'>
        Publications
      </Typography>
      <Arrow />
      <Shape route='publications' />
    </Page>
  );
};
