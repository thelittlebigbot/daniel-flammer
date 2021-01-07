import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Page, Row, Typography } from '../../components';
import { resourcesData } from '../../data';
import { style } from '../../helpers';

export const Series: React.FC = () => {
  const renderResources = resourcesData.map((i, key) => {
    return (
      <Row>
        <Component>
          <Link to={i.link}>
            <Image src={i.thumb} alt={i.name} />
            <Typography type='title' variant='large'>
              {i.name}
            </Typography>
            <Typography>{i.date}</Typography>
          </Link>
        </Component>
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

const Component = styled.div`
  & a {
    color: ${() => style.color.black};
  }

  &:hover {
    & a {
      background: none;
      color: ${() => style.color.black};
      padding: 0;
    }
  }
`;

const Image = styled.img`
  width: 50%;
`;
