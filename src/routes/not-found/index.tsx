import React from 'react';

import { SEO, Typography } from '../../components';

export const NotFound: React.FC = () => {
  return (
    <div>
      <SEO title='404: Page Not Found' description='...' keywords='...' />
      <Typography type='title' variant='big'>
        404: Page Not Found
      </Typography>
    </div>
  );
};
