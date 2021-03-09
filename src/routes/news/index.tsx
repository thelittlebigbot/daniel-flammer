import React from 'react';
import styled from 'styled-components';

import { newsShape } from '../../assets';
import { Arrow, Page, SEO, Typography } from '../../components';

import newsImage from '../../assets/news/news.jpg';

export const News: React.FC = () => {
  return (
    <Page shape={newsShape}>
      <SEO title='News' description='...' keywords='...' />
      <Typography type='title' variant='large'>
        Printemps 2021: Visite de l'ADIAF à l'atelier
      </Typography>
      <Image src={newsImage} alt='News' />
      <Arrow />
    </Page>
  );
};

const Image = styled.img`
  width: 50%;
`;
