import React from 'react';
import styled from 'styled-components';

import { Page, Row, Typography, Wallpaper } from '../../components';
import { biographyData } from '../../data';
import { style } from '../../helpers';

export const Biography: React.FC = () => {
  const renderEducaton = biographyData.education.map((i, key) => {
    return (
      <Component key={key}>
        <Typography type='title' variant='medium'>
          {i.school}
        </Typography>
        <Typography type='title' variant='regular'>
          {i.degree}
        </Typography>
        <Typography type='text' variant='small'>
          {i.date}
        </Typography>
      </Component>
    );
  });

  const renderExhibition = biographyData.exhibition.map((i, key) => {
    return (
      <Component key={key}>
        <Typography type='title' variant='medium'>
          {i.name}
        </Typography>
        <Typography type='title' variant='regular'>
          {i.place}
        </Typography>
        <Typography type='text' variant='small'>
          {i.date}
        </Typography>
      </Component>
    );
  });

  return (
    <Page>
      <Typography type='title' variant='big'>
        Biography
      </Typography>
      <Row>
        <Typography type='title' variant='large'>
          About me
        </Typography>
        <Typography type='text' variant='small'>
          {biographyData.about.first}
        </Typography>
        <Typography type='text' variant='small'>
          {biographyData.about.second}
        </Typography>
      </Row>
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
      <Wallpaper route='biography' />
    </Page>
  );
};

const Component = styled.div`
  margin: ${() => style.font.size.medium} 0;
`;
