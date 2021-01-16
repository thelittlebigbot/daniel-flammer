import React from 'react';
import styled from 'styled-components';
import { resourcesData } from '../../data';

import { Row, Typography } from '../../components';

export const Slug: React.FC = () => {
  const url = window.location.pathname;

  const render = resourcesData.map((i, key) => {
    if (url === `${i.link}`) {
      return (
        <div key={key}>
          <Typography type='title' variant='big'>
            {i.name}
          </Typography>
          <Typography>{i.description}</Typography>
          <Typography>{i.date}</Typography>

          {i.resources.map((y, key) => {
            return (
              <Row key={key}>
                <Image src={y.path} alt={y.tag} />
                <Typography>{y.tag}</Typography>
              </Row>
            );
          })}
        </div>
      );
    } else return null;
  });

  return (
    <div>
      <div>{render}</div>
    </div>
  );
};

const Image = styled.img`
  width: 50%;
`;
