import React from 'react';
import styled from 'styled-components';
import { arrowShape } from '../../assets';

export const Arrow: React.FC = () => {
  return (
    <Component onClick={() => window.scrollTo(0, 0)}>
      <Image src={arrowShape} alt='Arrow' />
    </Component>
  );
};

const Component = styled.div`
  position: fixed;
  top: 95%;
  /* transform: rotate(270deg) translate(-50%, -50%); */
  transform: translate(-50%, -50%);
  left: 50%;

  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  /* width: 4rem; */
  width: 1rem;
`;
