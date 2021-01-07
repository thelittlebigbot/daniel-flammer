import React from 'react';

import { Page, Typography } from '../../components';

export const NotFound: React.FC = () => {
  return (
    <Page>
      <Typography type='title' variant='big'>
        404: Page Not Found
      </Typography>
    </Page>
  );
};
