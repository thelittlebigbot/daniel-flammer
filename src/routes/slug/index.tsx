import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { slugShape } from '../../assets';
import { Arrow, Page, Row, SEO, Typography } from '../../components';
import { resourcesData } from '../../data';

export const Slug: React.FC = () => {
  const url = window.location.pathname;

  const renderSeries = resourcesData.map((i, key) => {
    if (url === `${i.link}`) {
      return (
        <Blank key={key}>
          <SEO title={i.name} description={i.description} keywords='...' />
          <Typography type='title' variant='large'>
            {`${i.name}, ${i.date}`}
          </Typography>

          <Typography type='text'>{i.description}</Typography>
          <Typography type='title' variant='medium'>
            ff
          </Typography>

          {i.resources.map((y, key) => {
            return (
              <Row key={key}>
                <Zoom>
                  <Image src={y.path} alt={y.tag} />
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
    </Page>
  );
};

const Blank = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
`;
