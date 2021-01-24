import React from 'react';
import styled from 'styled-components';

import { newsShape } from '../../assets';
import { Arrow, Page, SEO, Typography } from '../../components';

export const News: React.FC = () => {
  return (
    <Page shape={newsShape}>
      <SEO title='News' description='...' keywords='...' />
      <Typography type='title' variant='large'>
        Printemps 2021: Visite de l'ADIAF à l'atelier
      </Typography>
      <Image src='/resources/2019-guerre-des-images/6.jpg' alt='News' />
      <Arrow />
    </Page>
  );
};

const Image = styled.img`
  width: 50%;
`;
