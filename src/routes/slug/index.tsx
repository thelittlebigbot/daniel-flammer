import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { resourcesData } from '../../data';
import { Arrow, Page, Row, Typography, Shape } from '../../components';
import { slugShape } from '../../assets';

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
                <Zoom>
                  <Row>
                    <Image src={y.path} alt={y.tag} />
                  </Row>
                </Zoom>
                <Typography type='text'>{y.tag}</Typography>
              </Row>
            );
          })}
        </Blank>
      );
    } else return null;
  });

  return (
    <Page shape={slugShape}>
      {renderSeries}
      <Arrow />
      <Shape route='slug' />
    </Page>
  );
};

const Blank = styled.div`
  width: 75%;
`;

const Image = styled.img`
  width: 100%;
`;
