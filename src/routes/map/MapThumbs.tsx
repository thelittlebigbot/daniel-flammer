import React from 'react';
import styled from 'styled-components';

import { resourcesData } from '../../data';
import { style } from '../../helpers';

export const MapThumbs: React.FC = () => {
  const renderThumbs = resourcesData.map((i, key) => {
    return (
      <Container key={key}>
        <Image src={i.thumb} alt={i.name} />
      </Container>
    );
  });

  return <Component>{renderThumbs}</Component>;
};

const Component = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  top: 51%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: -10;
`;

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  opacity: calc(${() => style.opacity} * 1.25);

  &:hover {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
