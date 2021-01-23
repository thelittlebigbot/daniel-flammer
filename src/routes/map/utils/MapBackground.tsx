import React from 'react';
import styled from 'styled-components';

interface Props {
  draw: any;
}

export const MapBackground: React.FC<Props> = ({ draw }) => {
  return (
    <Component
      width='933'
      height='641'
      viewBox='0 0 933 641'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <Path d={draw.background} />
    </Component>
  );
};

const Component = styled.svg`
  position: relative;
  width: 80%;
  fill: #202020;
`;

const Path = styled.path`
  fill: #202020;
`;
