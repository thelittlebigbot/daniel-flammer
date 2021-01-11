import React from 'react';
import styled from 'styled-components';

interface Props {
  draw: any;
}

export const MapMenu: React.FC<Props> = ({ draw }) => {
  return (
    <Component
      height='641'
      viewBox='0 0 933 641'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <Path d={draw.base} />
    </Component>
  );
};

const Component = styled.svg`
  position: relative;
  width: 80%;
`;

const Path = styled.path`
  fill: #202020;
`;
