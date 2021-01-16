import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Arrow, Page, Row, Typography, Shape } from '../../components';
import { resourcesData } from '../../data';
import { style } from '../../helpers';

export const Series: React.FC = () => {
  const renderResources = resourcesData
    .sort((a, b) => b.date - a.date)
    .map((i, key) => {
      return (
        <Blank key={key}>
          <Typography type='title' variant='big'>
            {i.name}
          </Typography>
          <Typography type='title' variant='large'>
            {i.date}
          </Typography>
          <Row>
            <Grid>
              {i.resources.map((i, key) => {
                return <Image key={key} src={i.path} alt={i.tag} />;
              })}
            </Grid>
          </Row>
          <Link to={i.link}>See "{i.name}" series</Link>
        </Blank>
      );
    });

  return (
    <Page>
      {renderResources}
      <Arrow />
      <Shape route='series' />
    </Page>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 736px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Blank = styled.div``;

const Image = styled.img`
  width: 100%;
  padding: ${() => style.font.size.big};

  @media (max-width: 1280px) {
    padding: ${() => style.font.size.large};
  }

  @media (max-width: 736px) {
    padding: ${() => style.font.size.medium};
  }
`;
