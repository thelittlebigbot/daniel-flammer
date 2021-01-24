import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { seriesShape, slugShape } from '../../assets';
import { Arrow, Page, Row, SEO, Typography } from '../../components';
import { resourcesData } from '../../data';

export const Slug: React.FC = () => {
  const url = window.location.pathname;

  const renderSeries = resourcesData.map((i, key) => {
    if (url === `${i.link}` && !i.hidden) {
      return (
        <Blank key={key}>
          <SEO title={i.name} description={i.description} keywords='...' />
          <Typography type='title' variant='large'>
            {`${i.name}, ${i.date}`}
          </Typography>

          <Typography type='text'>{i.description}</Typography>

          {i.resources.map((y, key) => {
            return (
              <Row>
                <Zoom>
                  <Image src={y.path} alt={i.name} />
                </Zoom>
                <p>
                  <b>{y.name} - </b>
                  <i>{y.date} - </i>
                  {y.informations}
                </p>
                <Space />
              </Row>
            );
          })}
        </Blank>
      );
    } else return null;
  });

  return (
    <Page shape={seriesShape}>
      {renderSeries}
      <Arrow />
    </Page>
  );
};

const Blank = styled.div`
  width: 100%;
  margin: 0 auto;

  & > div > div {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Space = styled.div`
  height: 5rem;
`;
