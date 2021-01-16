import React from 'react';
import styled from 'styled-components';

export const Arrow: React.FC = () => {
  return (
    <Component onClick={() => window.scrollTo(0, 0)}>Return at top</Component>
  );
};

const Component = styled.div`
  position: fixed;
  top: 50%;
  transform: rotate(270deg) translate(-50%, -50%);
  left: -0%;

  &:hover {
    cursor: pointer;
  }
`;
