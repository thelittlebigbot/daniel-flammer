import React from 'react';
import styled from 'styled-components';
import { biographyShape, profilePhoto } from '../../assets';

import { Arrow, Page, Row, SEO, Typography } from '../../components';
import { biographyData } from '../../data';
import { style } from '../../helpers';

export const Biography: React.FC = () => {
  const renderEducaton = biographyData.education
    .sort((a: any, b: any) => b.date - a.date)
    .map((i, key) => {
      return (
        <Component key={key}>
          <Typography type='text' variant='italic'>
            {i.date}
          </Typography>
          <Typography type='text' variant='bold'>
            {i.degree}
          </Typography>
          <Typography type='text' variant='regular'>
            {i.school}
          </Typography>
        </Component>
      );
    });

  const renderExhibition = biographyData.exhibition
    .sort((a: any, b: any) => b.date - a.date)
    .map((i, key) => {
      return (
        <Component key={key}>
          <Typography type='text' variant='italic'>
            {i.date}
          </Typography>
          <Typography type='text' variant='bold'>
            {i.name}
          </Typography>
          <Typography type='text' variant='regular'>
            {i.place}
          </Typography>
        </Component>
      );
    });

  return (
    <Page shape={biographyShape}>
      <SEO title='Biography' description='...' keywords='...' />
      <Row>
        <Typography type='text' variant='regular'>
          {biographyData.about.first}
        </Typography>
        <br />
        <Typography type='text' variant='regular'>
          {biographyData.about.second}
        </Typography>
      </Row>
      <Image src={profilePhoto} alt='profile' />
      <Row>
        <Typography type='title' variant='large'>
          Education
        </Typography>
        {renderEducaton}
      </Row>
      <Row>
        <Typography type='title' variant='large'>
          Exhibition
        </Typography>
        {renderExhibition}
      </Row>
      <Arrow />
    </Page>
  );
};

const Component = styled.div`
  margin: ${() => style.font.size.medium} 0;
`;

const Image = styled.img`
  width: 50%;
`;
