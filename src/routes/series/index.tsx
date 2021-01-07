import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Page, Row, Typography } from '../../components';
import { resourcesData } from '../../data';

export const Series: React.FC = () => {
  const renderResources = resourcesData.map((i, key) => {
    return (
      <Row>
        <Link to={i.link}>
          <Image src={i.thumb} alt={i.name} />
          <Typography type='title' variant='large'>
            {i.name}
          </Typography>
          <Typography>{i.date}</Typography>
        </Link>
      </Row>
    );
  });

  return (
    <Page>
      <Typography type='title' variant='big'>
        Series
      </Typography>
      {renderResources}
    </Page>
  );
};

const Image = styled.img`
  width: 50%;
`;
