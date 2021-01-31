import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Row, SEO, Typography } from '../../components';

export const NotFound: React.FC = () => {
  return (
    <div>
      <SEO title='404: Page Not Found' description='...' keywords='...' />

      <Component>
        <Row>
          <Typography type='title' variant='big'>
            404
          </Typography>
          <Typography type='title' variant='medium'>
            Page not found
          </Typography>
          <Link to='/'>Back to home</Link>
        </Row>
      </Component>
    </div>
  );
};

const Component = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
