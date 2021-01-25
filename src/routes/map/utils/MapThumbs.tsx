import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { resourcesData } from '../../../data';
import { style } from '../../../helpers';

export const MapThumbs: React.FC = () => {
  const renderThumbs = resourcesData
    .sort((a, b) => b.date - a.date)
    .map((i, key) => {
      if (!i.hidden) {
        return (
          <Container key={key}>
            <Link to={i.link}>
              <Image src={i.thumb} alt={i.name} />
            </Link>
          </Container>
        );
      } else return null;
    });

  return <Component>{renderThumbs}</Component>;
};

const Component = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  top: 51%;
  left: 51.5%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  width: 5rem;
  height: 5rem;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1280px) {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 895px) {
    width: 3rem;
    height: 3rem;
  }

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
