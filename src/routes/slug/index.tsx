import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { seriesShape } from '../../assets';
import { Arrow, Page, Row, SEO, Typography } from '../../components';
import { resourcesData } from '../../data';
import { style } from '../../helpers';

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
            const Render = () => {
              if (y.path.includes('mp4')) {
                return (
                  <Video controls autoPlay muted>
                    <source src={y.path} />
                  </Video>
                );
              } else {
                return (
                  <Zoom>
                    <Image src={y.path} alt={i.name} />
                  </Zoom>
                );
              }
            };

            const renderInformations = (): string => {
              if (y.informations !== 'null') {
                return ` - ${y.informations}`;
              } else {
                return '';
              }
            };

            return (
              <Row key={key}>
                <Render />
                <p>
                  <b>{y.name} - </b>
                  <i>{y.date}</i>
                  {renderInformations()}
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
  padding: ${() => style.font.size.large} 0;
`;

const Video = styled.video`
  width: 50%;
  padding: ${() => style.font.size.large} 0;
`;

const Space = styled.div`
  height: 5rem;
`;
