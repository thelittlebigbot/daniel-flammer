import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { resourcesData } from '../../../data';
import { style } from '../../../helpers';

export const MapThumbs: React.FC = () => {
  const renderThumbs = resourcesData.slice(0, 6).map((i, key) => {
    if (!i.hidden) {
      return (
        <Container key={key}>
          <Link to={i.link}>
            <Image src={i.thumb} alt={i.name} />
          </Link>
        </Container>
      );
    }
  });

  return <Component>{renderThumbs}</Component>;
};

const Component = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  top: 51%;
  left: 52%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;

  a {
    opacity: ${() => style.opacity};
  }

  a:hover {
    background: none;
    padding: 0;
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #202020;
  /* cursor: pointer; */
`;
