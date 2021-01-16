import React from 'react';
import styled from 'styled-components';
import { resourcesData } from '../../data';

import { Arrow, Page, Row, Typography, Wallpaper } from '../../components';

export const Slug: React.FC = () => {
  const url = window.location.pathname;

  const renderSeries = resourcesData.map((i, key) => {
    if (url === `${i.link}`) {
      return (
        <Blank key={key}>
          <Typography type='title' variant='big'>
            {i.name}
          </Typography>
          <Typography type='title' variant='medium'>
            {i.date}
          </Typography>
          <Typography type='text'>{i.description}</Typography>

          {i.resources.map((y, key) => {
            return (
              <Row key={key}>
                <Image src={y.path} alt={y.tag} />
                <Typography type='text'>{y.tag}</Typography>
              </Row>
            );
          })}
        </Blank>
      );
    } else return null;
  });

  return (
    <Page>
      {renderSeries}
      <Arrow />
      <Wallpaper route='slug' />
    </Page>
  );
};

const Blank = styled.div``;

const Image = styled.img`
  width: 50%;
`;
